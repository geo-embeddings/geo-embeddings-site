# GeoZarr Website

A landing page for orientation to the [GeoZarr](https://github.com/zarr-developers/geozarr-spec) project — modular Zarr conventions for storing and accessing multidimensional georeferenced grids.

Built with [VitePress](https://vitepress.dev/).

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.md` | Landing page with project overview and feature highlights |
| Conventions | `conventions.md` | Core conventions (geo-proj, spatial, multiscales) with maturity levels |
| Roadmap | `roadmap.md` | V1 release milestones targeting OGC standardization |
| Implementations | `implementations.md` | Matrix of libraries and tools with feature support |
| Get Involved | `get-involved.md` | Community links, meeting schedule, and contribution guide |

## Development

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
npm install
npm run dev       # Start dev server with hot reload at localhost:5173
npm run build     # Build static site for production
npm run preview   # Preview the production build locally
```

## Project Structure

```
geozarr-site/
├── .vitepress/
│   ├── config.mjs          # Site config: nav, sidebar, footer, search
│   └── theme/
│       ├── index.js         # Custom theme extending VitePress default
│       └── style.css        # Custom color scheme and styles
├── public/
│   └── favicon.svg
├── index.md                 # Home (hero layout)
├── conventions.md
├── roadmap.md
├── implementations.md
└── get-involved.md
```

## Editing Content

All content lives in Markdown files at the project root. VitePress renders them using [its Markdown extensions](https://vitepress.dev/guide/markdown) — standard Markdown plus frontmatter, custom containers, and Vue components.

Each page on the live site also has an "Edit this page on GitHub" link in the footer.
