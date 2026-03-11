---
description: GeoZarr V1 release roadmap — three milestones targeting OGC Architecture Board review by summer 2026.
---

# V1 Roadmap

The SWG approved a V1 roadmap at the February 2026 meeting. The target is OAB review by **summer 2026**.

GeoZarr V1 is built on three modular, composable Zarr conventions:

| Convention | Repo |
|------------|------|
| **geo-proj** (`proj:`) | [zarr-conventions/geo-proj](https://github.com/zarr-conventions/geo-proj) |
| **spatial** (`spatial:`) | [zarr-conventions/spatial](https://github.com/zarr-conventions/spatial) |
| **multiscales** | [zarr-conventions/multiscales](https://github.com/zarr-conventions/multiscales) |

## Milestone 1: Release Candidate

All content complete and ready for formal review. No new features after this point.

**Exit Criteria:**

- All three conventions finalized
- Conformance classes defined
- Normative language (RFC 2119) applied throughout
- JSON Schemas stable and validated
- At least 3 implementations documented (Candidate maturity)
- Code owner designated for each convention
- Test dataset suite available
- Documentation complete (quickstart, composition guide, compatibility matrix)

## Milestone 2: Architecture Board Review

**Target:** Summer 2026

Submit to OGC Architecture Board for technical review and public comment.

**Exit Criteria:**

- Spec document in OGC format
- Public comment period completed (30–60 days)
- Comments addressed

## Milestone 3: SWG Vote

Final SWG vote for adoption as OGC Standard.

**Exit Criteria:**

- OAB review complete
- SWG vote passed
- Release artifacts published
- All conventions at Candidate maturity (3+ implementations)

## Post-V1

Deferred to future releases:

- Linked datasets convention (multi-variable relationships, heterogeneous coordinates)

## Progress Tracking

<script setup>
import { data } from './roadmap.data.js'
</script>

<RoadmapTracker :milestones="data.milestones" />

View the full [GitHub Project Board](https://github.com/orgs/zarr-developers/projects/12) for details.
