---
description: Model card format for geo-embeddings.
---

# Model Card

This is a template for Hugging Face model cards tailored for geospatial foundation models. Copy the markdown below and paste it into your model's README.md on Hugging Face Hub. Replace the placeholders in `{braces}` with your own information.

## Template

```yaml
---
# === Basic Information (Required) ===
language:
- {lang_0}
- {lang_1}

license: {license}
license_name: {license_name}
license_link: {license_link}

library_name: {library_name}
provider: {provider}
funder: {funder}

tags:
- {tag_0}
- {tag_1}
- {tag_2}

# === Embedding Properties (Required) ===
embedding_spatial_types:
- {embedding_spatial_type_0}
- {embedding_spatial_type_1}

embedding_temporal_type:
- {embedding_temporal_type_0}
- {embedding_temporal_type_1}

embedding_spatial_context: {embedding_spatial_context}
embedding_temporal_context: {embedding_temporal_context}
embedding_dimension: {embedding_dimension}

# === Model Details (Optional) ===
description: {description}
compression: {compression}
intention: {intention}
cautions: {cautions}
precomputed_embeddings: {precomputed_embeddings}
publication_link: {publication_link}
model_architecture: {model_architecture}

# === Pretraining (Optional) ===
pretraining:
  data_types:
  - {data_type_0}
  - {data_type_1}
  product_names:
  - {product_name_0}
  - {product_name_1}
  training_strategy: {training_strategy}
  training_resource: {training_resource}
  spatial_extent: {spatial_extent}
  temporal_extent: {temporal_extent}
  patch_size: {patch_size}
  temporal_context: {temporal_context}
  batch_size: {batch_size}

# === Inference (Optional) ===
inference:
  data_types:
  - {data_type_0}
  - {data_type_1}
  product_names:
  - {product_name_0}
  - {product_name_1}
  patch_size: {patch_size}
  temporal_context: {temporal_context}

# === Standard HF Fields (Optional) ===
datasets:
- {dataset_0}

metrics:
- {metric_0}

base_model: {base_model}

# === Evaluation Results (Optional) ===
model-index:
- name: {model_id}
  results:
  - task:
      type: {task_type}
      name: {task_name}
    dataset:
      type: {dataset_type}
      name: {dataset_name}
      config: {dataset_config}
      split: {dataset_split}
      revision: {dataset_revision}
      args:
        {arg_0}: {value_0}
    metrics:
      - type: {metric_type}
        value: {metric_value}
        name: {metric_name}
        config: {metric_config}
        args:
          {arg_0}: {value_0}
        verifyToken: {verify_token}
    source:
      name: {source_name}
      url: {source_url}
---
```

## Field Reference

### Basic Information

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `language` | No | Language codes | `fr`, `en` |
| `license` | Yes | License identifier from [HF licenses](https://hf.co/docs/hub/repositories-licenses) | `apache-2.0` |
| `license_name` | No | Custom license ID (if `license` = `other`) | `my-license-1.0` |
| `license_link` | No | Path or URL to license file (if `license` = `other`) | `LICENSE.md` |
| `library_name` | No | Library from [HF model libraries](https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts) | `keras` |
| `provider` | Yes | Organization or individual that developed the model | `NASA` |
| `funder` | No | Funding institutions | `NSF`, `ESA` |
| `tags` | No | Searchable tags | `SSL`, `Geospatial Foundation Model`, `multispectral` |

### Embedding Properties

| Field | Required | Description | Acceptable Values |
|-------|----------|-------------|-------------------|
| `embedding_spatial_types` | Yes | Spatial type of embeddings | `pixel`, `patch`, `scene` |
| `embedding_temporal_type` | Yes | Temporal type of embeddings | `single-date`, `multi-date` |
| `embedding_spatial_context` | Yes | Spatial context scope | `spatial context determined by embedding spatial type`, `spatial context beyond embedding spatial type` |
| `embedding_temporal_context` | Yes | Temporal context scope | `temporal context determined by embedding spatial type`, `spatial context beyond embedding temporal type` |
| `embedding_dimension` | Yes | Embedding vector size (integer) | `768` |

### Model Details

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `description` | Yes | Free text explanation of the model | |
| `compression` | No | Description of storage compression used | |
| `intention` | No | Intended use case and how training data was sampled | `land cover`, `oceans`, `urban` |
| `cautions` | No | Constraints or cautions for users | `model not trained on snow`, `loses accuracy with high cloud coverage` |
| `precomputed_embeddings` | No | Link to precomputed embeddings, or `no` | `yes: https://...` or `no` |
| `publication_link` | No | URL to related publication | |
| `model_architecture` | No | Description of model architecture | `ViT-L/14` |

### Pretraining (Optional)

| Field | Description | Acceptable Values / Example |
|-------|-------------|----------------------------|
| `data_types` | Types of data used for training | `RGB`, `multispectral`, `hyperspectral`, `SAR`, `LiDAR`, `DEM`, `climate data`, `text`, `semantic data` |
| `product_names` | Data products used | `sentinel-2-l2a` |
| `training_strategy` | Training approach | `Contrastive`, `MIM`, `Barlow Twins` |
| `training_resource` | Training resource requirements (energy, GPU, etc.) | |
| `spatial_extent` | Bounding box(es) in EPSG 4326 | |
| `temporal_extent` | Date range | `01-01-2020` to `31-12-2023` |
| `patch_size` | Patch size (integer) | `224` |
| `temporal_context` | Temporal context for training | `single-date`, `multi-date` |
| `batch_size` | Batch size (integer) | `32` |

### Inference (Optional)

| Field | Description | Acceptable Values / Example |
|-------|-------------|----------------------------|
| `data_types` | Types of data supported for inference | `RGB`, `multispectral`, `hyperspectral`, `SAR`, `LiDAR`, `DEM`, `climate data`, `text`, `semantic data` |
| `product_names` | Data products supported | `sentinel-2-l2a` |
| `patch_size` | Patch size (integer) | `224` |
| `temporal_context` | Temporal context for inference | `single-date`, `multi-date` |

### Evaluation Results (Optional)

Use `model-index` to encode evaluation results for downstream tasks.

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `model-index.name` | Yes | Model identifier | |
| `task.type` | Yes | Task type | `crop field segmentation` |
| `task.name` | No | Task name | `Field Segmentation` |
| `dataset.type` | Yes | Dataset type | `Field boundary labels` |
| `dataset.name` | Yes | Dataset name | `PASTIS` |
| `dataset.config` | No | Dataset subset for `load_dataset()` | |
| `dataset.split` | No | Dataset split | `test` |
| `dataset.revision` | No | Dataset revision hash | |
| `metrics.type` | Yes | Metric ID from [HF metrics](https://hf.co/metrics) | `wer` |
| `metrics.value` | Yes | Metric value | `20.90` |
| `metrics.name` | No | Metric display name | `Test WER` |
| `source.name` | No | Source of evaluation results | `PANGAEA` |
| `source.url` | If source provided | Link to source | `https://arxiv.org/...` |
