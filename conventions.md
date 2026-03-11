---
description: GeoZarr core conventions for CRS (geo-proj), spatial transforms, and multiscale pyramids — composable, JSON Schema-validated, and built on the Zarr Conventions Framework.
---

# Conventions

GeoZarr is a set of composable [Zarr conventions](https://github.com/zarr-conventions/.github/blob/main/profile/README.md) for encoding geospatial data. Each convention addresses a single concern and can be used independently or together.

## Core Conventions

| Convention | Namespace | UUID | Purpose |
|------------|-----------|------|---------|
| [geo-proj](https://github.com/zarr-conventions/geo-proj) | `proj:` | `f17cb550-5864-4468-aeb7-f3180cfb622f` | CRS information via EPSG codes, WKT2, or PROJJSON |
| [spatial](https://github.com/zarr-conventions/spatial) | `spatial:` | `689b58e2-cf7b-45e0-9fff-9cfc0883d6b4` | Affine transforms between array indices and coordinates |
| [multiscales](https://github.com/zarr-conventions/multiscales) | `multiscales` | `d35379db-88df-4056-af3a-620245f8e347` | Pyramid structures and resolution levels |

## How Conventions Work

Each convention is registered via the `zarr_conventions` metadata array in a Zarr group or array's attributes. This array lists which conventions apply and where to find their schemas.

- **UUID** provides a globally unique identifier for each convention
- **JSON Schema** provides machine-readable validation of convention metadata
- **Namespaced attributes** (e.g., `proj:code`, `spatial:transform`) prevent collisions between conventions

### Composability

A single Zarr group can use multiple conventions simultaneously. For example, a geospatial dataset typically combines all three:

- **geo-proj** to specify the CRS (e.g., EPSG:4326)
- **spatial** to define the affine transform from pixel to geographic coordinates
- **multiscales** to describe a resolution pyramid

The `geo-proj` and `spatial` conventions also support **inheritance** — metadata set at the group level is inherited by direct child arrays, with array-level attributes taking precedence.

## Additional Conventions Under Consideration

- **CF in Zarr** — CF metadata registration using unprefixed attributes for backwards compatibility with existing CF-compliant datasets
- **[DGGS in Zarr](https://github.com/zarr-conventions/dggs)** — Discrete Global Grid Systems
- **TileMatrixSet** — OGC TileMatrixSet encoding

## Convention Maturity Framework

Conventions advance through maturity levels based on the number of independent implementations, per the [Zarr Conventions Framework](https://github.com/zarr-conventions/.github/blob/main/profile/README.md):

| Maturity | Min Implementations | Stability |
|----------|-------------------|-----------|
| Proposal | 0 | Not stable — breaking changes expected |
| Pilot | 1 | Approaching stability |
| Candidate | 3 | Mostly stable — breaking changes require new version |
| Stable | 6 | Completely stable — review process required |

All three core GeoZarr conventions are currently at **Proposal** maturity and targeting **Candidate** (3+ implementations) for V1.
