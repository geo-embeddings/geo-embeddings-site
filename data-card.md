---
description: Data card format for geo-embeddings.
---

# Dataset Card

This is a template for Hugging Face dataset cards tailored for geospatial embedding datasets. Copy the markdown below and paste it into your dataset's README.md on Hugging Face Hub. Replace the placeholders in `{braces}` with your own information.

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
license_details: {license_details}

creator: {creator}
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

grid_spacing:
- {x_meters, y_meters}
- {x_meters, y_meters}

# === Source Information (Required) ===
inference_datasets:
- {source_dataset_0}
- {source_dataset_1}

model_name: {model_name}
model_link: {model_link}

# === Processing Details (Optional) ===
postprocessing: {postprocessing}
quantization: {quantization}

# === Standard HF Fields (Optional) ===
paperswithcode_id: {paperswithcode_id}

# === Dataset Info (Optional) ===
dataset_info:
  features:
    - name: {feature_name_0}
      dtype: {feature_dtype_0}
    - name: {feature_name_1}
      dtype: {feature_dtype_1}
  download_size: {download_size}
  dataset_size: {dataset_size}

# === Access Control (Optional) ===
extra_gated_fields:
- {field_name_0}: {field_type_0}
- {field_name_1}: {field_type_1}

extra_gated_prompt: {extra_gated_prompt}
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
| `license_details` | No | Legacy textual description of a custom license | |
| `creator` | Yes | Organization or individual that created the dataset | `NASA` |
| `funder` | No | Funding institutions | `NSF`, `ESA` |
| `tags` | No | Searchable tags | `geospatial`, `embeddings`, `sentinel-2` |

### Embedding Properties

| Field | Required | Description | Acceptable Values |
|-------|----------|-------------|-------------------|
| `embedding_spatial_types` | Yes | Spatial type of embeddings | `pixel`, `patch`, `scene` |
| `embedding_temporal_type` | Yes | Temporal type of embeddings | `single-date`, `multi-date` |
| `embedding_spatial_context` | Yes | Spatial context scope | `spatial context determined by embedding spatial type`, `spatial context beyond embedding spatial type` |
| `embedding_temporal_context` | Yes | Temporal context scope | `temporal context determined by embedding spatial type`, `spatial context beyond embedding temporal type` |
| `embedding_dimension` | Yes | Embedding vector size (integer) | `768` |
| `grid_spacing` | Yes | Size in meters of the output footprint (x, y) | `10, 10` |

### Source Information

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `inference_datasets` | Yes | Source data products used to generate embeddings | `sentinel-2-l2a`, `sentinel-1-rtc` |
| `model_name` | Yes | Name of the model used to generate embeddings | `Clay-v1` |
| `model_link` | Yes | URL to the model card | `https://huggingface.co/...` |

### Processing Details (Optional)

| Field | Description | Example |
|-------|-------------|---------|
| `postprocessing` | Any processing applied to embeddings after generation (e.g., smoothing) | |
| `quantization` | Any quantization applied to embedding values, or `null` | `int8` |

### Dataset Info (Optional)

| Field | Description | Example |
|-------|-------------|---------|
| `features` | List of features with `name` and `dtype` | `name: id, dtype: int32` |
| `download_size` | Download size in bytes | `35142551` |
| `dataset_size` | Dataset size in bytes | `89789763` |

### Access Control (Optional)

Use these fields if you want your dataset protected behind a gate. See [HF gated datasets](https://huggingface.co/docs/hub/datasets-gated) for more info.

| Field | Description | Example |
|-------|-------------|---------|
| `extra_gated_fields` | Fields users must fill out to access | `Name: text`, `Email: text`, `Affiliation: text` |
| `extra_gated_prompt` | Message shown to users requesting access | |
