# aptos-labs.github.io

This repository is the source for the Aptos Labs **organization-level GitHub Pages
site**, served at <https://aptos-labs.github.io/>.

It hosts a small landing page plus origin-level discovery files
(`robots.txt`, `sitemap.xml`, `llms.txt`). Project documentation lives in
sub-directories that are populated from other repositories.

## Hosted documentation

| Path | Source repository | Pushed by |
|---|---|---|
| [`/move-book/`](https://aptos-labs.github.io/move-book/) | [`aptos-labs/aptos-core`](https://github.com/aptos-labs/aptos-core) — `third_party/move/documentation/book` | `book/deploy.sh` in aptos-core |
| [`/framework-book/`](https://aptos-labs.github.io/framework-book/) | [`aptos-labs/aptos-core`](https://github.com/aptos-labs/aptos-core) — `third_party/move/documentation/framework-book` | `framework-book/deploy.sh` in aptos-core |

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
| `_headers` | RFC 8288 `Link` response headers and a `Content-Type: text/markdown` rule for `/index.md`. Honored by Cloudflare Pages and Netlify; **GitHub Pages ignores this file**, so the same metadata is also encoded as `<link>` elements in `index.html` and as Content-Signal directives in `robots.txt`. |
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
