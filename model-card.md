---
description: Model card format for geo-embeddings.
---

# Model Card

This modelcard is adopted from Hugging Face and is a suggestion for how to document geospatial foundation models to allow potential users to easily query and understand models. 

```markdown
---
# Suggested metadata to be added to a model card.  
language:
- {lang_0}  # Example: fr
- {lang_1}  # Example: en

license: {license}  # Example: apache-2.0 or any license from https://hf.co/docs/hub/repositories-licenses
license_name: {license_name}  # If license = other (license not in https://hf.co/docs/hub/repositories-licenses), specify an id for it here, like `my-license-1.0`.
license_link: {license_link}  # If license = other, specify "LICENSE" or "LICENSE.md" to link to a file of that name inside the repo, or a URL to a remote file.
library_name: {library_name}  # Optional. Example: keras or any library from https://github.com/huggingface/huggingface.js/blob/main/packages/tasks/src/model-libraries.ts
provider: {provider_names} # Name(s) of organization or individual that developed/licensed the model
funder: {funder_names} # Optional. Name(s) of funding institutions where relevant
tags:
- {tag_0}  # Example: SSL
- {tag_1}  # Example: Geospatial Foundation Model
- {tag_2}  # Example: multispectral


embedding_spatial_types: # acceptable values pixel, patch, scene
- {embedding_type_1}
- {embedding_type_2}

embedding_temporal_type: # acceptable values single-date and multi-date
- {embedding_temporal_context_1}
- {embedding_temporal_context_2}

embedding_spatial_context: {embedding_spatial_context} # acceptable values spatial context determined by embedding spatial type, spatial context beyond embedding spatial type 

embedding_temporal_context: {embedding_temporal_context} # acceptable values temporal context determined by embedding spatial type, spatial context beyond embedding temporal type

embedding_dimension: {embedding_dimension} # int
description: {description} # Free format text to explain the model 

compression: {storage_compression} # Optional. Free format text

intention: {intension} # Optional. Free format text to explain the intention of the model developer ex. land cover, oceans, ecosystems, urban, etc., and how they approached sampling based on this

cautions: {caution} # Optional. Free format text to share constraints or cautions the user should be aware of ex. model not trained on snow, model not trained on clouds, model embeddings loose deterministic quality with high cloud coverage, etc.

precomputed_embeddings: {precomputed_embeddings} #[yes (link), no]

publication_link: {publication_url} # Optional. 

model_architecture: {model_architecture} #Optional text to describe the model architecture. 


pretraining: # Optional.
- data_types: # acceptable values RGB, multispectral, hyperspectral, SAR, LiDAR, DEM, climate data, text, semantic data, etc.
--  {data_type_1}
--  {data_type_2}
- product_names: # [ex. sentinel-2-l2a, …]
- {product_name_1}
- {product_name_2}
- training_strategy: {training_strategy} # e.g Contrastive, MIM, Barlow Twins, …
- training_resource: {training_resource} #Optional text to describe requirements for training resources (i.e. Energy use, GPU, etc., for training)
- spatial_extent: {spatial_extent} # bounding box(es) in EPSG 4326
- temporal_extent: {temporal_extent} # date range dd-mm-yyyy
- patch_size: {patch_size} # int
- temporal_context: {temporal_context} # acceptable values single-date and multi-date
- batch_size: {batch_size} # int


inference: # Optional.
- data_types: # acceptable values RGB, multispectral, hyperspectral, SAR, LiDAR, DEM, climate data, text, semantic data, etc.
--  {data_type_1}
--  {data_type_2}
- product_names: # [ex. sentinel-2-l2a, …]
- {product_name_1}
- {product_name_2}
- patch_size: {patch_size} # int
- temporal_context: {temporal_context} # acceptable values single-date and multi-date




#datasets:
#- {dataset_0}  # Example: common_voice. Use dataset id from https://hf.co/datasets
#metrics:
#- {metric_0}  # Example: wer. Use metric id from https://hf.co/metrics
#base_model: {base_model}  # Example: stabilityai/stable-diffusion-xl-base-1.0. Can also be a list (for merges)

# Optional. Add this if you want to encode your eval results in a structured way in regards to downstream tasks.

model-index:
- name: {model_id}
  results:
  - task:
      type: {task_type}             # Required. Example: crop field segmentation
      name: {task_name}             # Optional. Example: Field Segmentation
    dataset:
      type: {dataset_type}          # Required. Example: Field boundary labels
      name: {dataset_name}          # Required. Name for the dataset. Example: PASTIS, or your own name
      config: {dataset_config}      # Optional. The name of the dataset subset used in `load_dataset()`
      split: {dataset_split}        # Optional. Example: test
      revision: {dataset_revision}  # Optional. Example: 5503434ddd753f426f4b38109466949a1217c2bb
      args:
        {arg_0}: {value_0}          # Optional. Additional arguments to `load_dataset()`. Example for wikipedia: language: en
        {arg_1}: {value_1}          # Optional. Example for wikipedia: date: 20220301
    metrics:
      - type: {metric_type}         # Required. Example: wer. Use metric id from https://hf.co/metrics
        value: {metric_value}       # Required. Example: 20.90
        name: {metric_name}         # Optional. Example: Test WER
        config: {metric_config}     # Optional. The name of the metric configuration used in `load_metric()`. Example: bleurt-large-512 in `load_metric("bleurt", "bleurt-large-512")`. See the `datasets` docs for more info: https://huggingface.co/docs/datasets/v2.1.0/en/loading#load-configurations
        args:
          {arg_0}: {value_0}        # Optional. The arguments passed during `Metric.compute()`. Example for `bleu`: max_order: 4
        verifyToken: {verify_token} # Optional. If present, this is a signature that can be used to prove that evaluation was generated by Hugging Face (vs. self-reported).
    source:                         # Optional. The source for this result.
      name: {source_name}           # Optional. The name of the source. Example: PANGAEA: A Global and Inclusive Benchmark for Geospatial Foundation Models.
      url: {source_url}             # Required if source is provided. A link to the source. Example: https://arxiv.org/html/2412.04204v1
---

This markdown file contains the spec for the SSL/Geospatial foundation model modelcard metadata. Note that some characteristics of embeddings, which may also be of interest, are not included. Properties will be validated by the Hub when git pushing changes to your README.md file.
Valid license identifiers can be found in [our docs](https://huggingface.co/docs/hub/repositories-licenses).

For a template for the human-readable portion of the model card, see: [modelcard_template.md file](https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/modelcard_template.md).
```
