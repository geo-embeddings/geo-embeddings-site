# Geo-Embeddings Website

A landing page for orientation to the Geo-Embeddings Best Practices.

Built with [VitePress](https://vitepress.dev/).

## Pages

| Page            | File                 | Notes                                       |
| --------------- | -------------------- | ------------------------------------------- |
| Home            | `index.md`           | Hero and project overview                   |
| Best Practices  | `bestpractices.md`   | Best-practice guidance and maturity model   |
| Implementations | `implementations.md` | Libraries and tools                         |
| Tutorials       | `tutorials/*.ipynb`  | Executed notebooks rendered into site pages |
| Get Involved    | `get-involved.md`    | Contribution and community info             |
| FAQ             | `faq.md`             | Frequently asked questions                  |
| Resources       | `resources.md`       | Resource page (not currently linked in nav) |

## Navigation (current)

Top nav currently includes:

- Home
- Best Practices
- Implementations
- Tutorials
- Get Involved
- FAQ
- Resources (dropdown currently has no links)

## Development

Requires [Node.js](https://nodejs.org/) (v18+) and [uv](https://docs.astral.sh/uv/).

```bash
uv sync --group docs --group notebooks
npm install
npm run build:tutorials  # Render executed notebooks in tutorials/ into Markdown pages
npm run dev       # Start dev server with hot reload at localhost:5173
npm run build     # Build static site for production
npm run preview   # Preview the production build locally
```

Python dependencies are split into two `uv` groups:

- `docs`: notebook-to-Markdown build tooling used by `npm run build:tutorials`
- `notebooks`: interactive notebook dependencies for running and editing tutorials locally

## Contributing Tutorials

- Add source notebooks to `tutorials/` and keep outputs saved if you want rendered results on the site.
- Start Jupyter with the notebook dependencies via `uv run --group notebooks jupyter lab`.
- Rebuild tutorial pages locally with `npm run build:tutorials` before previewing or committing.
- Do not commit generated Markdown from notebooks; the site build renders tutorial pages from `.ipynb` files.
- Check the rendered tutorial locally with `npm run dev` or `npm run build && npm run preview`.

## Project Structure

```
geo-embeddings-site/
├── .vitepress/
│   ├── config.mjs          # Site config: nav, sidebar, footer, search
│   └── theme/
│       ├── index.js         # Custom theme extending VitePress default
│       └── style.css        # Custom color scheme and styles
├── public/
│   └── favicon.svg
├── index.md
├── bestpractices.md
├── implementations.md
├── get-involved.md
├── faq.md
├── resources.md
└── roadmap.data.js
```

## Editing Content

All content lives in Markdown files at the project root. VitePress renders them using [its Markdown extensions](https://vitepress.dev/guide/markdown) — standard Markdown plus frontmatter, custom containers, and Vue components.


## Attribute 
Thank you to Max Jones and the [GeoZarr-Site](https://github.com/zarr-developers/geozarr-site) for sharing the structure of the GeoZarr-Site with Geo-Embeddings
