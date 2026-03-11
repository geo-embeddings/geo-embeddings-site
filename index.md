---
description: GeoZarr defines modular, composable Zarr conventions for storing multidimensional georeferenced grids. An emerging OGC standard for cloud-native geospatial data.
layout: home

hero:
  name: GeoZarr
  text: Geospatial Conventions for Zarr
  tagline: Modular, composable conventions for storing multidimensional georeferenced grids. Targeting OGC standardization.
  actions:
    - theme: brand
      text: Join Us
      link: /get-involved
    - theme: alt
      text: View Conventions
      link: /conventions
    - theme: alt
      text: View Spec Repo
      link: https://github.com/zarr-developers/geozarr-spec
    - theme: alt
      text: Join OGC SWG
      link: https://agora.ogc.org/c/overview-716766/


features:
  - icon: "\U0001F9E9"
    title: Modular Conventions
    details: Each convention addresses a single concern — CRS, spatial transforms, or multiscale pyramids. Use one or combine them all.
  - icon: "\U0001F517"
    title: Built on Zarr Conventions
    details: Uses the Zarr Conventions Framework — UUID-identified, JSON Schema-validated, with a clear maturity path from Proposal to Stable.
  - icon: "\U0001F3DB"
    title: OGC Standards Track
    details: Developed by the OGC GeoZarr Standards Working Group, targeting Architecture Board review by summer 2026.
  - icon: "\U0001F30D"
    title: Geospatial CRS (geo-proj)
    details: Encode coordinate reference systems via EPSG codes, WKT2, or PROJJSON using the <code>proj:</code> namespace.
  - icon: "\U0001F4D0"
    title: Spatial Transforms
    details: Define affine transformations between array indices and geographic coordinates using the <code>spatial:</code> namespace.
  - icon: "\U0001F52D"
    title: Multiscale Pyramids
    details: Describe resolution levels and pyramid structures for efficient multi-resolution access.

---
