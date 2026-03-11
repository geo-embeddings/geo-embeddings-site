---
description: Best practices for storing and sharing geo-embeddings using cloud native geospatial formats, the embedding STAC extensions for embedding discoverability. 
---
# Best Practices
## Storage 
We recommend using blob storage for sharing geo-embeddings with the community. Access over HTTP with range-reads supported is the key feature. Public buckets are great if you can pay for the egress; or setting up a requester-pays bucket allows public access at no network egress cost to you. This can be Source Coop, AWS S3, Google Cloud GCS, Azure Blob store, Huggingface, or similar.

::: info
To host data via Source Cooperative, fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLScvt8OYE-gf7xkdtMYhjcgoUWZcJQILHKiBkLtihQ-bHWiBZA/viewform?usp=sharing&ouid=118199663156641128589).
:::

::: tip
If the cost of blob storage from large providers like AWS or GCS is cost-prohibitive for you or your org, check out this guide + cost comparison for other blob storage options.
:::


## Cloud Native Geospatial Formats 
We recommend the following formats depending on the gridding of the geo-embedding outputs.

::: tip
If you're new to cloud native geospatial data formats and want to learn more about the recommended formats, check out the [Cloud Native Geospatial Formats Guide](https://guide.cloudnativegeo.org/). 
:::

### Zarr
We recommend using this data format if the data is regularly gridded.

<TODO: turn to a table>
- Coordinates: Time, Y, X
- Dimensions: Time, Embedding, Y, X
  - Time - int (year) or datetime object (timestamp, time delta)
- Attributes
  - [Projections](https://github.com/zarr-conventions/geo-proj)
  - [Spatial Ref](https://github.com/zarr-conventions/spatial)
  - [Embedding](https://github.com/geo-embeddings/embeddings-stac-specification)

For multi-temporal embeddings:
<TODO: turn to a table>
- Coordinates: timedelta, Y, X (date range)
- Dimensions: timedelta, Embedding, Y, X
- Compression: BLOSC with ZSTD
- Use Zarr's sharding codec.

::: tip
- Recommend one zarr store per CRS. e.g. one store for global datasets in `epsg:4326`, or one store per UTM zone for datasets in UTM coordinates.
- Chunking: chunking is use case dependent and depends on the size of the zarr file being created, as well as compute resources available. Generally aim for chunk sizes to be < 1GB.
:::

<!-- link to AEF zarr example -->

<!-- to do: sample well formatted zarr file, Olmo Zarr file, can share out if we want to use as an example -->

### Cloud Optimized GeoTIFFs (COGs)
Use this format if the data is regularly gridded — an alternative option to Zarr, but Zarr is strongly encouraged.
- TILE interleave requires use of GDAL >= 3.11
- Horizontal differencing (predictor=2).
- ZSTD compression.

<!-- sample well-formatted COG file -->


### Geoparquet 
Use if your data is sparse, or an irregular grid.
- Spatial ordering (Example: Hilbert curve).
- Bbox column with covering metadata.
- ZSTD compression.
- Appropriate row group sizes (~128MB)
- Page sizes: use case dependent.
  - Recommends using a page size=embedding size for vector search

#### Tooling
##### Zarr
  - [Zarr-python](https://github.com/zarr-developers/zarr-python)
  - [Zarrs](https://github.com/zarrs/zarrs)
##### COGs
  - [GDAL](https://github.com/OSGeo/gdal)
  - [Rasterio](https://github.com/rasterio/rasterio)
  - [rio-cogeo]https://github.com/cogeotiff/rio-cogeo)
##### Geoparquet
  - [Geoparquet-io](https://github.com/geoparquet/geoparquet-io)
  - [Geopandas](https://github.com/geopandas/geopandas)

<!-- sample well formatted geoparquet -->


## Data Provenance
Providing information including data products used, and exact input imagery and processing whenever possible as metadata is highly encouraged. Stay tuned for more examples and if you have thoughts please reach out to contribute.

## Examples
