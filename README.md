# aptos-labs.github.io

This repository is the source for the Aptos Labs **organization-level GitHub Pages
site**, served at <https://aptos-labs.github.io/>.

It hosts a small landing page plus origin-level discovery files
(`robots.txt`, `sitemap.xml`, `llms.txt`). Project documentation lives in
sub-directories that are populated from other repositories.

## Hosted documentation

| Path | Source repository | Pushed by |
|---|---|---|
| [`/move-book/`](https://aptos-labs.github.io/move-book/) | [`aptos-labs/aptos-core`](https://github.com/aptos-labs/aptos-core) — `third_party/move/documentation/book` on **`main`** | [Publish documentation](.github/workflows/publish-documentation.yml) (Move book **always** uses aptos-core `main`; `aptos_core_ref` affects framework tooling only) |
| [`/framework-book/`](https://aptos-labs.github.io/framework-book/) | [`aptos-labs/aptos-framework`](https://github.com/aptos-labs/aptos-framework) branch **`main`**, with book tooling from [`aptos-labs/aptos-core`](https://github.com/aptos-labs/aptos-core) | Same workflow; root URL mirrors **`main`** |
| [`/framework-book/main/`](https://aptos-labs.github.io/framework-book/main/) … [`/devnet/`](https://aptos-labs.github.io/framework-book/devnet/) | `aptos-framework` branch per path segment (`main`, `mainnet`, `testnet`, `devnet`) | Same workflow; `aptos-experimental` comes from the **tooling** aptos-core checkout |

Maintainers can still use `book/deploy.sh` and `framework-book/deploy.sh` in **aptos-core** for ad-hoc publishes, but the org site is intended to track **Publish documentation** so the layout above stays consistent.

### Automated publish (GitHub Actions)

Workflow: [`.github/workflows/publish-documentation.yml`](.github/workflows/publish-documentation.yml).

- **Triggers:** `workflow_dispatch`, nightly `schedule`, and `repository_dispatch` with type `publish-docs` (call from other repos with a token that has `contents` write access here).
- **Triggering from another repo** (`repository_dispatch`):

  ```bash
  curl -sS -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer YOUR_PAT" \
    https://api.github.com/repos/aptos-labs/aptos-labs.github.io/dispatches \
    -d '{"event_type":"publish-docs","client_payload":{"aptos_core_ref":"main"}}'
  ```

  Omit `client_payload` or leave `aptos_core_ref` unset to default to `main`. Values are validated (no newlines; strict allow-list) before use.
- **Behavior:** clones aptos-core at `aptos_core_ref` for **framework-book tooling**; when that ref is not `main`, clones a second aptos-core checkout at **`main`** for the Move book only. Builds `/move-book/` from the **main** checkout, then for each framework channel clones [`aptos-labs/aptos-framework`](https://github.com/aptos-labs/aptos-framework), overlays into `aptos-move/framework/`, runs `framework-book/build.sh`, stages all channels under a temp directory, and performs **one** final `rsync` into `/framework-book/` so a failed optional channel does not delete sibling published trees. Missing optional branches are skipped with a warning. Third-party Actions are pinned to commit SHAs.
- **Credentials:** the default `GITHUB_TOKEN` from `actions/checkout` is enough **unless** `main` is protected in a way that blocks machine pushes; in that case add a fine‑grained PAT as a secret and pass it to `actions/checkout` (see GitHub docs for “push with contents write”).

Local dry run (no commit/push): `DRY_RUN=1 ./scripts/publish-documentation.sh` from a clone of this repo (requires Rust, `mdbook`, and Aptos build dependencies).

## Updating the landing page

Edit `index.html` and push to `main`. GitHub Pages republishes within a minute or two.

## Updating `robots.txt`, `sitemap.xml`, `llms.txt`

These files describe the **whole origin**. Adding a new project under this Pages
site means adding a `<url>` entry to `sitemap.xml` and a link to `llms.txt` here,
then republishing.

## Agent / crawler discovery files

The repository also ships a few files that make the site easier for AI agents
and crawlers to consume:

| File | Purpose |
|---|---|
| `index.md` | Markdown representation of the landing page (advertised from `index.html` as `<link rel="alternate" type="text/markdown">` and listed in `sitemap.xml`). |
| `_headers` | RFC 8288 `Link` response headers and a `Content-Type: text/markdown` rule for `/index.md`. Honored by Cloudflare Pages and Netlify; **GitHub Pages ignores this file**. The same `Link` relations are mirrored as `<link>` elements in `index.html` as a fallback (the `/index.md` Content-Type override has no inline equivalent and only takes effect on hosts that honor `_headers`). |
| `robots.txt` | Includes a [`Content-Signal`](https://contentsignals.org/) directive declaring AI usage preferences alongside the standard crawler policy. See the file itself for the current policy. |

### Limitations on GitHub Pages

GitHub Pages does not let us set arbitrary HTTP response headers, so true
`Accept: text/markdown` content negotiation and origin-level `Link:` headers
are not possible without fronting the site with a proxy or migrating to a
host such as Cloudflare Pages or Netlify. The `_headers` file in this
repository is configured to do the right thing if/when that happens.

References:

- [RFC 8288 — Web Linking](https://www.rfc-editor.org/rfc/rfc8288)
- [RFC 9727 §3 — `service-doc` / API discovery](https://www.rfc-editor.org/rfc/rfc9727#section-3)
- [Cloudflare — Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/)
- [contentsignals.org](https://contentsignals.org/) /
  [draft-romm-aipref-contentsignals](https://datatracker.ietf.org/doc/draft-romm-aipref-contentsignals/)
