---
description: Best practices for hosting geo-embeddings in blob storage with HTTP range-read support.
---

# Storage

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
