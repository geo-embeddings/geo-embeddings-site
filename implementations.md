---
description: Libraries and tools implementing GeoZarr conventions — Python, C++, and JavaScript support across geo-proj, spatial, and multiscales.
---

# Implementations

GeoZarr conventions advance in maturity through diverse implementations. The [Zarr Conventions Framework](https://github.com/zarr-conventions/.github/blob/main/profile/README.md) requires 3+ independent implementations for **Candidate** maturity.

## Implementation Matrix

| Implementation | Language | geo-proj | spatial | multiscales |
|----------------|----------|----------|---------|-------------|
| [eopf data-model](https://github.com/CSC-DPR/eopf-geozarr) | Python | Full | Full | Full |
| [zarr-cm](https://github.com/zarr-conventions/zarr-cm) | Python | Full | Full | Full |
| [geozarr-toolkit](https://github.com/developmentseed/geozarr-toolkit) | Python | In progress | In progress | In progress |
| [rioxarray](https://github.com/corteva/rioxarray) | Python | In progress | In progress | — |
| [GDAL](https://gdal.org/) | C++ | Planned | Planned | Planned |
| [OpenLayers](https://github.com/spacebel/geozarr-openlayers) | JavaScript | Read | Read | Read |
| [TiTiler](https://github.com/developmentseed/titiler) | Python | Read | Read | Read |

**Support levels:** Full = read/write, Read = read-only, Planned = not yet started

## Tools & Libraries

### geozarr-toolkit

Python library for creating, validating, and working with GeoZarr metadata. Includes a CLI (`geozarr validate`, `geozarr info`) and a FastAPI web service.

- [GitHub](https://github.com/zarr-developers/geozarr-toolkit)

### geozarr-examples

Reference documentation, Jupyter notebook examples, and example datasets demonstrating GeoZarr conventions in practice.

- [Documentation](https://developmentseed.org/geozarr-examples/)
- [GitHub](https://github.com/developmentseed/geozarr-examples)

### metazarr

Browser-based tool for exploring Zarr stores and validating GeoZarr conventions against JSON Schemas. Runs entirely client-side.

- [GitHub](https://github.com/zarr-developers/geozarr-toolkit/tree/main/metazarr)
- [Online inspector](https://inspect.geozarr.org)

### Zarr-cm

Lightweight Python implementation of Zarr Conventions Metadata.

- [GitHub](https://github.com/zarr-conventions/zarr-cm)
