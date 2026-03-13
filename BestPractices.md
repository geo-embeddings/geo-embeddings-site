---
description: Best practices for storing and sharing geo-embeddings using cloud native geospatial formats and the embedding STAC extensions for discoverability.
---

# Best Practices

This guide provides recommendations for storing, formatting, and sharing geo-embeddings with the community using cloud-native geospatial standards.

## Storage

We recommend using blob storage for sharing geo-embeddings. The key requirement is HTTP access with range-read support. Options include:

- **Public buckets** — Great if you can pay for egress costs
- **Requester-pays buckets** — Enables public access with no egress cost to you

Compatible storage providers include [Source Coop](https://source.coop), AWS S3, Google Cloud Storage, Azure Blob Storage, and Hugging Face.

::: info Hosting with Source Cooperative
To host data via Source Cooperative, fill out this [intake form](https://docs.google.com/forms/d/e/1FAIpQLScvt8OYE-gf7xkdtMYhjcgoUWZcJQILHKiBkLtihQ-bHWiBZA/viewform?usp=sharing&ouid=118199663156641128589).
:::

::: tip Cost Considerations
If blob storage from large providers like AWS or GCS is cost-prohibitive, check out the [CNG Storage Guide](https://bdon.github.io/cng-storage-guide/) for alternative options and cost comparisons.
:::

## Cloud Native Geospatial Formats

Choose your format based on how your geo-embedding outputs are gridded.

::: tip New to Cloud Native Formats?
Check out the [Cloud Native Geospatial Formats Guide](https://guide.cloudnativegeo.org/) for an introduction to these formats.
:::

### Zarr

**Recommended for regularly gridded data.**

| Aspect | Specification |
|--------|---------------|
| Coordinates | Time, Embedding, Y, X |
| Dimensions | Time, Embedding, Y, X |
| Time format | Integer (year) or datetime (timestamp, timedelta) |
| Compression | BLOSC with ZSTD |
| Sharding | Use Zarr's sharding codec |
| Conventions | [geo-proj](https://github.com/zarr-conventions/geo-proj), [spatial](https://github.com/zarr-conventions/spatial), [embeddings-stac](https://github.com/geo-embeddings/embeddings-stac-specification) |

**For multi-temporal embeddings:**

| Aspect | Specification |
|--------|---------------|
| Coordinates | timedelta, Embedding, Y, X |
| Dimensions | timedelta, Embedding, Y, X |

::: tip Zarr Recommendations
- **One store per CRS** — e.g., one store for global datasets in `EPSG:4326`, or one store per UTM zone for regional datasets.
- **Chunk sizes** — Aim for chunks < 1GB. Optimal chunking depends on file size and available compute resources.
:::

### Cloud Optimized GeoTIFFs (COGs)

**Alternative for regularly gridded data.** Zarr is preferred, but COGs are a viable option.

| Setting | Recommendation |
|---------|----------------|
| Interleave | TILE (requires GDAL ≥ 3.11) |
| Predictor | Horizontal differencing (predictor=2) |
| Compression | ZSTD |

### GeoParquet

**Recommended for sparse or irregularly gridded data.** These recommendations are based on the [GeoParquet best practices guide](https://geoparquet.io/concepts/best-practices/).

| Setting | Recommendation |
|---------|----------------|
| Spatial ordering | Hilbert curve or similar |
| Bbox column | Include with covering metadata |
| Compression | ZSTD |
| Row group size | ~128MB |
| Page size | Use case dependent; embedding size recommended for vector search |

## Tooling

### Zarr
- [zarr-python](https://github.com/zarr-developers/zarr-python) — Python implementation
- [zarrs](https://github.com/zarrs/zarrs) — Rust implementation

### COGs
- [GDAL](https://github.com/OSGeo/gdal) — Geospatial Data Abstraction Library
- [Rasterio](https://github.com/rasterio/rasterio) — Python interface to GDAL
- [rio-cogeo](https://github.com/cogeotiff/rio-cogeo) — COG creation and validation

### GeoParquet
- [geoparquet-io](https://github.com/geoparquet/geoparquet-io) — GeoParquet utilities
- [GeoPandas](https://github.com/geopandas/geopandas) — Geospatial data in Python

## Data Provenance

Providing comprehensive metadata is highly encouraged. Include:

- Data products used
- Exact input imagery (preferably a STAC Item ID)
- Processing pipeline details

*Stay tuned for more examples. If you have thoughts, please [reach out to contribute](/get-involved).*
