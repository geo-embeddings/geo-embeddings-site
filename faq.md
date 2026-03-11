---
description: Frequently asked questions about GeoZarr — what it is, how conventions work, CF compatibility, Zarr V2/V3 support, and available tooling.
---

# FAQ

### What is GeoZarr?

GeoZarr is a collection of modular, composable [Zarr conventions](https://github.com/zarr-conventions/.github/blob/main/profile/README.md) for storing and accessing multidimensional georeferenced grids. It is being developed as an [OGC Standard](https://www.ogc.org/announcement/ogc-forms-new-geozarr-standards-working-group-to-establish-a-zarr-encoding-for-geospatial-data/) targeting OGC Architecture Board review by summer 2026. See the [roadmap](/roadmap) for current status.

### How do GeoZarr conventions work?

Rather than a monolithic specification, GeoZarr uses simple, composable Zarr Conventions that each address a single concern. The [Zarr Conventions Framework](https://github.com/zarr-conventions/zarr-conventions-spec) provides the registration mechanism — a `zarr_conventions` attribute in Zarr metadata that points to a convention's spec URL, schema, or UUID. See the [conventions page](/conventions) for details on each convention.

### What is the relationship between GeoZarr and CF conventions?

Zarr has a 10-year history of successful, informal use with CF (Climate and Forecast) data. We are currently evaluating how GeoZarr can best serve the climate and forecasting community, and expect to balance existing patterns and cloud-native innovations in metadata and data structure. If you'd like to join this effort, please review and comment on [CF alignment issue](https://github.com/zarr-developers/geozarr-spec/issues/120).

### Do conventions work with both Zarr V2 and V3?

Yes. The convention metadata content (`spatial:`, `proj:`, `multiscales`) is identical regardless of Zarr version — only the storage location differs (`.zattrs` files in V2 vs `attributes` in `zarr.json` for V3). Best practices may be impacted by new features available in Zarr V3 (e.g., sharding).

### What tools support GeoZarr conventions?

See the [implementations page](/implementations) for the current matrix of libraries and tools with their support levels.
