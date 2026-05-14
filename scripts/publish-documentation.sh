#!/usr/bin/env bash
# Build the Move book (always latest from aptos-core) and the Aptos Framework Book
# for each aptos-framework branch, then sync static output into this repository.
#
# Defaults assume the Aptos Labs org Pages layout:
#   move-book/              <- tip of aptos-core (Move book sources)
#   framework-book/         <- same content as aptos-framework branch "main"
#   framework-book/main/    <- duplicate of main for explicit channel URLs
#   framework-book/mainnet/ <- aptos-framework branch mainnet
#   framework-book/testnet/ <- aptos-framework branch testnet
#   framework-book/devnet/  <- aptos-framework branch devnet (skipped if missing)
#
# Environment:
#   SITE_ROOT          Root of aptos-labs.github.io checkout (default: parent of scripts/)
#   APTOS_CORE_ROOT    Existing aptos-core clone (default: SITE_ROOT/.publish-cache/aptos-core)
#   APTOS_CORE_REF     Used only when cloning aptos-core (default: main)
#   APTOS_FRAMEWORK_REPO  Git URL for aptos-framework (default: github aptos-labs)
#   DRY_RUN            If 1, build and rsync into SITE_ROOT but skip git commit/push
#   CARGO_BUILD_JOBS   Optional; lower to reduce memory (e.g. 2 on CI)
#
# Requires: git, rsync, mdbook, cargo, standard Aptos build deps (pkg-config, openssl, cmake, clang, …).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="${SITE_ROOT:-$(cd "$SCRIPT_DIR/.." && pwd)}"
APTOS_CORE_ROOT="${APTOS_CORE_ROOT:-$SITE_ROOT/.publish-cache/aptos-core}"
APTOS_CORE_REF="${APTOS_CORE_REF:-main}"
APTOS_FRAMEWORK_REPO="${APTOS_FRAMEWORK_REPO:-https://github.com/aptos-labs/aptos-framework.git}"
DRY_RUN="${DRY_RUN:-0}"

FRAMEWORK_CHANNELS=(main mainnet testnet devnet)
# Packages published from the standalone aptos-framework repo into aptos-core's tree.
OVERLAY_PACKAGES=(move-stdlib aptos-stdlib aptos-framework aptos-token-objects aptos-trading)

BOOK_TOOLING_DIR="$APTOS_CORE_ROOT/third_party/move/documentation/framework-book"
MOVE_BOOK_DIR="$APTOS_CORE_ROOT/third_party/move/documentation/book"

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

if [[ ! -f "$APTOS_CORE_ROOT/Cargo.toml" ]]; then
  mkdir -p "$(dirname "$APTOS_CORE_ROOT")"
  echo "==> Cloning aptos-core ($APTOS_CORE_REF) -> $APTOS_CORE_ROOT"
  rm -rf "$APTOS_CORE_ROOT"
  git clone --depth 1 --branch "$APTOS_CORE_REF" https://github.com/aptos-labs/aptos-core.git "$APTOS_CORE_ROOT"
fi

command -v mdbook >/dev/null || {
  echo "error: mdbook not found in PATH" >&2
  exit 1
}
command -v cargo >/dev/null || {
  echo "error: cargo not found in PATH" >&2
  exit 1
}

CORE_SHA="$(git -C "$APTOS_CORE_ROOT" rev-parse --short HEAD)"
BUILD_TIME="$(date -u +'%Y-%m-%d %H:%M UTC')"

echo "==> Building Move on Aptos book (tip from aptos-core $CORE_SHA)"
mdbook build "$MOVE_BOOK_DIR"
stamp_html "$MOVE_BOOK_DIR/html" "$BUILD_TIME (aptos-core $CORE_SHA move-book tip)"
mkdir -p "$SITE_ROOT/move-book"
rsync -a --delete "$MOVE_BOOK_DIR/html/" "$SITE_ROOT/move-book/"

for channel in "${FRAMEWORK_CHANNELS[@]}"; do
  echo "==> Framework book channel: $channel"
  fw_tmp="$(mktemp -d "${TMPDIR:-/tmp}/aptos-fw-${channel}.XXXXXX")"

  if ! git clone --depth 1 -b "$channel" "$APTOS_FRAMEWORK_REPO" "$fw_tmp/fw" 2>/dev/null; then
    rm -rf "$fw_tmp"
    if [[ "$channel" == "main" ]]; then
      echo "error: could not clone aptos-framework branch main" >&2
      exit 1
    fi
    echo "warn: skip channel $channel (branch missing or clone failed)" >&2
    continue
  fi

  FW_SHA="$(git -C "$fw_tmp/fw" rev-parse --short HEAD)"
  restore_framework_tree
  clean_framework_book_generated
  overlay_standalone_framework "$fw_tmp/fw"

  echo "==> Running framework-book build ($channel @ $FW_SHA)"
  (cd "$BOOK_TOOLING_DIR" && ./build.sh)

  label="$BUILD_TIME (aptos-framework $channel $FW_SHA; tooling aptos-core $CORE_SHA)"
  stamp_html "$BOOK_TOOLING_DIR/html" "$label"

  if [[ "$channel" == "main" ]]; then
    mkdir -p "$SITE_ROOT/framework-book" "$SITE_ROOT/framework-book/main"
    rsync -a --delete "$BOOK_TOOLING_DIR/html/" "$SITE_ROOT/framework-book/"
    rsync -a --delete "$BOOK_TOOLING_DIR/html/" "$SITE_ROOT/framework-book/main/"
  else
    mkdir -p "$SITE_ROOT/framework-book/$channel"
    rsync -a --delete "$BOOK_TOOLING_DIR/html/" "$SITE_ROOT/framework-book/$channel/"
  fi

  rm -rf "$fw_tmp"
done

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
  -m "Move book: aptos-core ${CORE_SHA}. Framework: channels ${FRAMEWORK_CHANNELS[*]} (aptos-framework repo branches; aptos-experimental from aptos-core)."
echo "==> Pushing site update"
PUBLISH_BRANCH="${DOCS_PUBLISH_BRANCH:-main}"
git push origin "HEAD:${PUBLISH_BRANCH}"
