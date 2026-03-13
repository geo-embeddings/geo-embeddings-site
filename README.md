# Geo-Embeddings Website

A landing page for orientation to the Geo-Embeddings Best Practices.

Built with [VitePress](https://vitepress.dev/).

## Pages

| Page            | File                 | Notes                                       |
| --------------- | -------------------- | ------------------------------------------- |
| Home            | `index.md`           | Hero and project overview                   |
| Best Practices  | `bestpractices.md`   | Best-practice guidance                      |
| Conventions     | `conventions.md`     | GeoEmbeddings maturity model                |
| Implementations | `implementations.md` | Libraries and tools                         |
| Get Involved    | `get-involved.md`    | Contribution and community info             |
| Glossary        | `glossary.md`        | Glossary of terms with anchor links         |
| Resources       | `resources.md`       | Resource page (not currently linked in nav) |

## Navigation (current)

Top nav currently includes:

- Home
- Best Practices
- Core Conventions
- Implementations
- Get Involved
- Glossary (dropdown with links to individual terms)

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
├── conventions.md
├── implementations.md
├── get-involved.md
├── glossary.md
```

## Editing Content

All content lives in Markdown files at the project root. VitePress renders them using [its Markdown extensions](https://vitepress.dev/guide/markdown) — standard Markdown plus frontmatter, custom containers, and Vue components.


## Attribute 
Thank you to Max Jones and the [GeoZarr-Site](https://github.com/zarr-developers/geozarr-site) for sharing the structure of the GeoZarr-Site with Geo-Embeddings