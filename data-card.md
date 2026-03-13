---
description: Data card format for geo-embeddings.
---

# Dataset Card

This dataset card represents a collection of information we recommend to be included with geospatial embedding datasets for dataset discovery and ability to query.

```markdown
---
# Suggested metadata to be added to a geospatial embedding dataset card.  

language:
- {lang_0}  # Example: fr
- {lang_1}  # Example: en

license: {license}  # Example: apache-2.0 or any license from https://hf.co/docs/hub/repositories-licenses

license_name: {license_name}  # If license = other (license not in https://hf.co/docs/hub/repositories-licenses), specify an id for it here, like `my-license-1.0`.

license_link: {license_link}  # If license = other, specify "LICENSE" or "LICENSE.md" to link to a file of that name inside the repo, or a URL to a remote file.

license_details: {license_details}  # Legacy, textual description of a custom license.

creator: {provider_names} # Name(s) of organization or individual that developed/licensed the model

funder: {funder_names} # Optional. Name(s) of funding institutions where relevant

tags:
- {tag_0}  # Example: audio
- {tag_1}  # Example: bio
- {tag_2}  # Example: natural-language-understanding
- {tag_3}  # Example: birds-classification

embedding_spatial_types: # acceptable values pixel, patch, scene
- {embedding_type_1}
- {embedding_type_2}

embedding_temporal_type: # acceptable values single-date and multi-date
- {embedding_temporal_context_1}
- {embedding_temporal_context_2}

embedding_spatial_context: {embedding_spatial_context} # acceptable values spatial context determined by embedding spatial type, spatial context beyond embedding spatial type 

embedding_temporal_context: {embedding_temporal_context} # acceptable values temporal context determined by embedding spatial type, spatial context beyond embedding temporal type

embedding_dimension: {embedding_dimension} # int

grid_spacing: # size in meters of the output footprint of embedding, can accept multiple sizes
- {x_meters, y_meteres} 
- {x_meters, y_meteres} 

inference_datasets:
- {source_dataset_0}  # Example: sentinel-2-l2a
- {source_dataset_1}  # Example: sentinel-1-rtc

model_name: {model_name} # name of the pretrained
model_link: {model_link} # URL to the model card

postprocessing: {postprocessing_description} # Explain any processing applied to embeddings (such as smoothing) after generation

quantization: {quantization_description} # Explain any quantization applied to the embedding values, null otherwise

paperswithcode_id: {paperswithcode_id}  # Dataset id on PapersWithCode (from the URL). Example for SQuAD: squad

# Optional. This part can be used to store information about features that are added to the embedding dataset such as an uncertianty rating or a label.
dataset_info:
  features:
    - name: {feature_name_0}    # Example: id
      dtype: {feature_dtype_0}  # Example: int32
    - name: {feature_name_1}    # Example: text
      dtype: {feature_dtype_1}  # Example: string
    - name: {feature_name_2}    # Example: image
      dtype: {feature_dtype_2}  # Example: image
  download_size: {dataset_download_size}   # Example for SQuAD: 35142551
  dataset_size: {dataset_size}             # Example for SQuAD: 89789763

# Optional. If you want your dataset to be protected behind a gate that users have to accept to access the dataset. More info at https://huggingface.co/docs/hub/datasets-gated
extra_gated_fields:
- {field_name_0}: {field_type_0}  # Example: Name: text
- {field_name_1}: {field_type_1}  # Example: Affiliation: text
- {field_name_2}: {field_type_2}  # Example: Email: text
- {field_name_3}: {field_type_3}  # Example for speech datasets: I agree to not attempt to determine the identity of speakers in this dataset: checkbox

extra_gated_prompt: {extra_gated_prompt}  # Example for speech datasets: By clicking on “Access repository” below, you also agree to not attempt to determine the identity of speakers in the dataset.
<!-- --- -->

Valid license identifiers can be found in [our docs](https://huggingface.co/docs/hub/repositories-licenses).

For a template for the human-readable portion of the dataset card, see: [datasetcard_template.md file](https://github.com/huggingface/huggingface_hub/blob/main/src/huggingface_hub/templates/datasetcard_template.md).
```
