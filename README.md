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

## Updating the landing page

Edit `index.html` and push to `main`. GitHub Pages republishes within a minute or two.

## Updating `robots.txt`, `sitemap.xml`, `llms.txt`

These files describe the **whole origin**. Adding a new project under this Pages
site means adding a `<url>` entry to `sitemap.xml` and a link to `llms.txt` here,
then republishing.
