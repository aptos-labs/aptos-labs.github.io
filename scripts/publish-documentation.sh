#!/usr/bin/env bash
# Build the Move book (always from aptos-core **main**) and the Aptos Framework Book
# for each aptos-framework branch, then sync static output into this repository.
#
# Defaults assume the Aptos Labs org Pages layout:
#   move-book/              <- aptos-core **main** (Move book sources)
#   framework-book/         <- same content as aptos-framework branch "main"
#   framework-book/main/    <- duplicate of main for explicit channel URLs
#   framework-book/mainnet/ <- aptos-framework branch mainnet
#   framework-book/testnet/ <- aptos-framework branch testnet
#   framework-book/devnet/  <- aptos-framework branch devnet (skipped if missing)
#
# Environment:
#   SITE_ROOT             Root of aptos-labs.github.io checkout (default: parent of scripts/)
#   APTOS_CORE_ROOT       aptos-core clone used for framework-book tooling (default: SITE_ROOT/.publish-cache/aptos-core)
#   APTOS_CORE_REF        Ref for tooling clone when (re)creating APTOS_CORE_ROOT (default: main)
#   APTOS_MOVE_BOOK_ROOT  Optional separate aptos-core clone for Move book (branch **main**).
#                         If unset: when APTOS_CORE_REF is **main**, Move book uses APTOS_CORE_ROOT;
#                         otherwise defaults to SITE_ROOT/.publish-cache/aptos-core-move-book so
#                         tooling and Move sources stay on different checkouts.
#   APTOS_FRAMEWORK_REPO  Git URL for aptos-framework (default: github aptos-labs)
#   DRY_RUN               If 1, build and rsync into SITE_ROOT but skip git commit/push
#   CARGO_BUILD_JOBS      Optional; lower to reduce memory (e.g. 2 on CI)
#
# Requires: git, rsync, mdbook, cargo, standard Aptos build deps (pkg-config, openssl, cmake, clang, …).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="${SITE_ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}"
APTOS_CORE_ROOT="${APTOS_CORE_ROOT:-$SITE_ROOT/.publish-cache/aptos-core}"
APTOS_CORE_REF="${APTOS_CORE_REF:-main}"
APTOS_MOVE_BOOK_ROOT="${APTOS_MOVE_BOOK_ROOT:-}"
APTOS_FRAMEWORK_REPO="${APTOS_FRAMEWORK_REPO:-https://github.com/aptos-labs/aptos-framework.git}"
APTOS_CORE_URL="${APTOS_CORE_URL:-https://github.com/aptos-labs/aptos-core.git}"
DRY_RUN="${DRY_RUN:-0}"

FRAMEWORK_CHANNELS=(main mainnet testnet devnet)
OVERLAY_PACKAGES=(move-stdlib aptos-stdlib aptos-framework aptos-token-objects aptos-trading)

validate_git_ref() {
  local r=$1 name=$2
  if [[ "$r" == *$'\n'* || "$r" == *$'\r'* ]]; then
    echo "error: $name must not contain newlines" >&2
    return 1
  fi
  if [[ -z "$r" || "$r" == *..* ]]; then
    echo "error: invalid $name (allowed: alnum, /, ., _, -): $r" >&2
    return 1
  fi
  if [[ ! "$r" =~ ^[a-zA-Z0-9/_./-]+$ ]]; then
    echo "error: invalid $name (allowed: alnum, /, ., _, -): $r" >&2
    return 1
  fi
}

# Shallow clone at $ref when missing or not at remote tip (avoids stale cached checkouts).
ensure_shallow_repo() {
  local root=$1 url=$2 ref=$3
  validate_git_ref "$ref" "git ref"
  local want
  want="$(git ls-remote "$url" "refs/heads/$ref" 2>/dev/null | awk 'NR==1 { print $1; exit }')"
  if [[ -z "$want" ]]; then
    want="$(git ls-remote "$url" "refs/tags/$ref" 2>/dev/null | awk 'NR==1 { print $1; exit }')"
  fi
  if [[ -z "$want" ]]; then
    echo "error: ref '$ref' not found on $(basename "$url" .git)" >&2
    return 1
  fi
  if [[ -d "$root/.git" ]]; then
    local have
    have="$(git -C "$root" rev-parse HEAD 2>/dev/null || true)"
    if [[ "$have" == "$want" ]]; then
      echo "==> $root already at $ref ($want)"
      return 0
    fi
  fi
  echo "==> (Re)cloning $url @ $ref -> $root"
  mkdir -p "$(dirname "$root")"
  rm -rf "$root"
  git clone --depth 1 --branch "$ref" "$url" "$root"
}

stamp_html() {
  local html_dir=$1
  local label=$2
  if [[ ! -d "$html_dir" ]]; then
    echo "error: missing html output: $html_dir" >&2
    return 1
  fi
  if grep -rq '(local build)' "$html_dir" 2>/dev/null; then
    # shellcheck disable=SC2016
    grep -rl '(local build)' "$html_dir" | xargs -r sed -i "s|(local build)|$label|g"
  fi
}

overlay_standalone_framework() {
  local fw_clone=$1
  local dest_root=$APTOS_CORE_ROOT/aptos-move/framework
  local pkg
  for pkg in "${OVERLAY_PACKAGES[@]}"; do
    if [[ -d "$fw_clone/$pkg" ]]; then
      mkdir -p "$dest_root/$pkg"
      rsync -a --delete "$fw_clone/$pkg/" "$dest_root/$pkg/"
    else
      echo "error: package $pkg missing under $fw_clone" >&2
      return 1
    fi
  done
}

restore_framework_tree() {
  git -C "$APTOS_CORE_ROOT" checkout -- aptos-move/framework
}

clean_framework_book_generated() {
  git -C "$BOOK_TOOLING_DIR" clean -fdX
}

if [[ ! -f "$SITE_ROOT/README.md" ]]; then
  echo "error: SITE_ROOT does not look like aptos-labs.github.io (no README.md): $SITE_ROOT" >&2
  exit 1
fi

validate_git_ref "$APTOS_CORE_REF" "APTOS_CORE_REF"

# Move book always tracks aptos-core branch main (separate clone when tooling ref != main).
MOVE_BOOK_REF="main"
if [[ -n "${APTOS_MOVE_BOOK_ROOT:-}" ]]; then
  MOVE_BOOK_ROOT="$APTOS_MOVE_BOOK_ROOT"
elif [[ "$APTOS_CORE_REF" == "main" ]]; then
  MOVE_BOOK_ROOT="$APTOS_CORE_ROOT"
else
  MOVE_BOOK_ROOT="$SITE_ROOT/.publish-cache/aptos-core-move-book"
fi

ensure_shallow_repo "$APTOS_CORE_ROOT" "$APTOS_CORE_URL" "$APTOS_CORE_REF"
ensure_shallow_repo "$MOVE_BOOK_ROOT" "$APTOS_CORE_URL" "$MOVE_BOOK_REF"

if [[ "$APTOS_CORE_REF" == "main" && -n "${APTOS_MOVE_BOOK_ROOT:-}" && "$APTOS_MOVE_BOOK_ROOT" != "$APTOS_CORE_ROOT" ]]; then
  echo "error: APTOS_MOVE_BOOK_ROOT is unnecessary when APTOS_CORE_REF is main (use a single checkout)" >&2
  exit 1
fi

BOOK_TOOLING_DIR="$APTOS_CORE_ROOT/third_party/move/documentation/framework-book"
MOVE_BOOK_DIR="$MOVE_BOOK_ROOT/third_party/move/documentation/book"

command -v mdbook >/dev/null || {
  echo "error: mdbook not found in PATH" >&2
  exit 1
}
command -v cargo >/dev/null || {
  echo "error: cargo not found in PATH" >&2
  exit 1
}

TOOLING_SHA="$(git -C "$APTOS_CORE_ROOT" rev-parse --short HEAD)"
MOVE_SHA="$(git -C "$MOVE_BOOK_ROOT" rev-parse --short HEAD)"
BUILD_TIME="$(date -u +'%Y-%m-%d %H:%M UTC')"

echo "==> Building Move on Aptos book (aptos-core main @ $MOVE_SHA)"
mdbook build "$MOVE_BOOK_DIR"
stamp_html "$MOVE_BOOK_DIR/html" "$BUILD_TIME (aptos-core $MOVE_SHA move-book main tip)"
mkdir -p "$SITE_ROOT/move-book"
rsync -a --delete "$MOVE_BOOK_DIR/html/" "$SITE_ROOT/move-book/"

# Stage all framework channels, then rsync once so partial failures do not delete sibling channels.
FW_STAGING="$(mktemp -d "${TMPDIR:-/tmp}/fw-book-staging.XXXXXX")"
cleanup_fw_staging() {
  rm -rf "$FW_STAGING"
}
trap cleanup_fw_staging EXIT

# Preserve previously published channel trees when a channel fails mid-run: seed staging
# from production, then use rsync `protect` when refreshing the root layout from `main`.
if [[ -d "$SITE_ROOT/framework-book" ]]; then
  echo "==> Seeding framework-book staging from current site output"
  rsync -a "$SITE_ROOT/framework-book/" "$FW_STAGING/"
fi

ROOT_CHANNEL_PROTECT=(
  '--filter=protect main/'
  '--filter=protect mainnet/'
  '--filter=protect testnet/'
  '--filter=protect devnet/'
)

for channel in "${FRAMEWORK_CHANNELS[@]}"; do
  echo "==> Framework book channel: $channel"
  fw_tmp="$(mktemp -d "${TMPDIR:-/tmp}/aptos-fw-${channel}.XXXXXX")"
  if ! (
    set -euo pipefail
    git clone --depth 1 -b "$channel" "$APTOS_FRAMEWORK_REPO" "$fw_tmp/fw"
    FW_SHA="$(git -C "$fw_tmp/fw" rev-parse --short HEAD)"
    restore_framework_tree
    clean_framework_book_generated
    overlay_standalone_framework "$fw_tmp/fw"
    echo "==> Running framework-book build ($channel @ $FW_SHA)"
    cd "$BOOK_TOOLING_DIR" && ./build.sh
    label="$BUILD_TIME (aptos-framework $channel $FW_SHA; tooling aptos-core $TOOLING_SHA)"
    stamp_html "$BOOK_TOOLING_DIR/html" "$label"
    if [[ "$channel" == "main" ]]; then
      mkdir -p "$FW_STAGING" "$FW_STAGING/main"
      # Do not delete sibling channel directories under the site root while updating main HTML.
      rsync -a --delete "${ROOT_CHANNEL_PROTECT[@]}" "$BOOK_TOOLING_DIR/html/" "$FW_STAGING/"
      rsync -a --delete "$BOOK_TOOLING_DIR/html/" "$FW_STAGING/main/"
    else
      mkdir -p "$FW_STAGING/$channel"
      rsync -a --delete "$BOOK_TOOLING_DIR/html/" "$FW_STAGING/$channel/"
    fi
  ); then
    rm -rf "$fw_tmp"
    if [[ "$channel" == "main" ]]; then
      echo "error: framework book build failed for main" >&2
      exit 1
    fi
    echo "warn: skip channel $channel (clone or build failed)" >&2
    continue
  fi
  rm -rf "$fw_tmp"
done

mkdir -p "$SITE_ROOT/framework-book"
rsync -a --delete "$FW_STAGING/" "$SITE_ROOT/framework-book/"
trap - EXIT
rm -rf "$FW_STAGING"

if [[ "$DRY_RUN" == "1" ]]; then
  echo "==> DRY_RUN=1: skipping git commit/push"
  exit 0
fi

cd "$SITE_ROOT"
git add move-book framework-book
if git diff --cached --quiet; then
  echo "==> No site changes to commit."
  exit 0
fi

if [[ -n "${GITHUB_ACTIONS:-}" ]]; then
  git config user.name "github-actions[bot]"
  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
fi

git commit -m "docs: republish move-book + multi-channel framework-book" \
  -m "Move book: aptos-core ${MOVE_SHA} (main). Framework tooling: ${TOOLING_SHA}. Channels: ${FRAMEWORK_CHANNELS[*]} (aptos-framework branches; aptos-experimental from tooling checkout)."

echo "==> Pushing site update"
PUBLISH_BRANCH="${DOCS_PUBLISH_BRANCH:-main}"
git push origin "HEAD:${PUBLISH_BRANCH}"
