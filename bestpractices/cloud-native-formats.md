---
description: Recommended cloud native geospatial formats (Zarr, COGs, GeoParquet) for storing geo-embeddings.
---

# Cloud Native Geospatial Formats

Choose your format based on how your geo-embedding outputs are gridded.

::: tip New to Cloud Native Formats?
Check out the [Cloud Native Geospatial Formats Guide](https://guide.cloudnativegeo.org/) for an introduction to these formats.
:::

## Zarr

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

## Cloud Optimized GeoTIFFs (COGs)

**Alternative for regularly gridded data.** Zarr is preferred, but COGs are a viable option.

| Setting | Recommendation |
|---------|----------------|
| Interleave | TILE (requires GDAL ≥ 3.11) |
| Predictor | Horizontal differencing (predictor=2) |
| Compression | ZSTD |

## GeoParquet

**Recommended for sparse or irregularly gridded data.** These recommendations are based on the [GeoParquet best practices guide](https://geoparquet.io/concepts/best-practices/).

| Setting | Recommendation |
|---------|----------------|
| Spatial ordering | Hilbert curve or similar |
| Bbox column | Include with covering metadata |
| Compression | ZSTD |
| Row group size | ~128MB |
| Page size | Use case dependent; embedding size recommended for vector search |
| Metadata | Embed STAC asset metadata in file header (see below) |

### Embedding STAC Metadata in GeoParquet

Embed STAC asset metadata directly in the GeoParquet file header using an `emb` key, similar to how GeoParquet uses the `geo` key. This approach **only** works when each file contains embeddings from a single STAC item. Alternatively, include a link to the STAC item in each row.

[Example file with embedded STAC metadata](https://ei-ssl4eo-embeddings.s3.us-west-2.amazonaws.com/test/18SUJ_2025-01-01_2026-01-01.parquet)

::: warning Reader Support
Some readers like GeoPandas don't expose custom metadata tags. Use PyArrow directly to read the `emb` metadata from file headers:

```python
import json
import pyarrow.parquet as pq

parquet_file = pq.ParquetFile("embeddings.parquet")
emb_metadata = json.loads(parquet_file.schema_arrow.metadata[b"emb"])
```
:::
