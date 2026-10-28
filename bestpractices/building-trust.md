---
description: Practices for embedding providers to build trust in geo-embeddings through data provenance, uncertainty quantification, and transparency about limitations.
---

# Building Trust in Geo-Embeddings

Embedding products are compact numerical representations, typically,  of multi-modal data, produced by models pre-trained on large volumes of Earth observation data. Because the heavy, expert-driven preprocessing has already been done upstream, users can feed embeddings directly into downstream tasks such as classification, regression or similarity search. Yet, most embedding products provide no uncertainty estimates or quality information to indicate under which conditions an embedding can be trusted. The remote sensing community is therefore right to be cautious.

Part of this caution comes from the view that embeddings are a fundamentally new kind of product. We argue that they are less new than they seem. Like land cover maps or biophysical retrievals, an embedding is the output of a model applied to satellite data. It inherits the same sources of error: noise and gaps in the input imagery, preprocessing choices, training data that does not represent all regions, seasons or land cover types equally well, and the design and pretraining choices of the model itself. The key difference is that an embedding has no physical unit or direct reference measurement, so its quality can only be assessed indirectly, through performance on downstream tasks. Established validation and error-reporting practices from remote sensing and machine learning remain the right starting point, but they need to be adapted to this indirect form of evaluation.

Embeddings can therefore be demystified the same way any data product is: through transparency about data quality and model limitations. To that end, we propose the following practices for embedding providers.

## Data Provenance

An embedding reflects both the data the model was trained on and the imagery it was computed from. Documenting both helps users anticipate where it may fail. Include:

**Training data**

- Locations and geographic density of training samples
- Temporal coverage (years, seasons)
- Input modalities and their processing baselines (e.g. Sentinel-2 L2A processing baseline, SAR calibration and terrain correction)
- References to public datasets used
- The motivation behind the training data selection

**Inference data**

- Input imagery metadata for each embedding (e.g., a STAC Item ID)
- Processing pipeline details (cloud masking, compositing, resampling)

## Quantifying Uncertainty

Two types of uncertainty are commonly distinguished ([Kendall & Gal, 2017](https://arxiv.org/abs/1703.04977)) :

- **Aleatoric uncertainty** stems from the data itself: sensor noise, acquisition issues, or inherent ambiguity in an observation. It cannot be reduced by collecting more training data.
- **Epistemic uncertainty** stems from the model: the training data was not representative enough for the location, season or land cover. It can be reduced, for instance by improving geographic or temporal coverage.

Approaches for supervised learning include [deep ensembles](https://arxiv.org/abs/1612.01474), Monte Carlo dropout, and test-time augmentation. Similar uncertainty quantification principes should be developed for and applied to foundation models, and their results reported per provided embedding. While uncertainty quantification may increase the cost of training and evaluating such models, we argue that reporting uncertainty is a cornerstone of building trust.

## Assessing limitations

Embedding providers should assess, document, and broadcast failure cases. Since they will vary from model to model, we encourage providers to be creative in their exploration of such edge cases. Examples include:

- Reporting stratified evaluation metrics, rather than a single aggregated one. Reporting performance per biome, region, and land-cover class could identify whether a model that performs well on average might fail in under-represented scenarios.
- Assessing how the availability of cloud-free observations might impact the embeddings of models relying (fully or in parts) on optical data.

Some of these limitations might describe the embedding product as a whole (e.g. the model struggles in monsoon regions) or describe single embedding values (e.g. this pixel was produced using a limited number of cloud-free observations, or Sentinel-1 data was missing for that year). For the latter, independent assessments can result in one or more quality flags or scores, shipped alongside the embedding product, analogous to the quality bands provided by satellite data providers.

## Conclusion

In summary, we propose that the following information be shipped alongside embedding products, to increase transparency and trustworthiness:

| Information | Granularity | Example |
|-------------|-------------|---------|
| Pre-training data description | Product | Geographical coverage and density, temporal range, modalities and processing baselines… |
| Stratified performance | Product | Evaluation scores per biome, region, and other stratifications |
| Input provenance | Per embedding | STAC Item ID(s) of the observations used to generate the embedding |
| Input quality | Per embedding | Number of cloud-free observations used to generate the embedding |
| Uncertainty estimate | Per embedding | Any measure of aleatoric or epistemic uncertainty |
| Quality flag | Per embedding | Categorical flag or score combining the above |

*Have thoughts on how quality information for embeddings should be standardized? Please [reach out to contribute](/get-involved).*
