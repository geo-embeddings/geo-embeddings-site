import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "Geo-Embeddings",
  description:
    "Modular Zarr conventions for storing and accessing multidimensional georeferenced grids",
  sitemap: {
    hostname: "https://geoembeddings.org",
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "https://geoembeddings.org" }],
    ["meta", { property: "og:title", content: "Geo-Embeddings" }],
    ["meta", { property: "og:url", content: "https://geoembeddings.org" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Modular Zarr conventions for storing and accessing multidimensional georeferenced grids",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
  ],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Best Practices", link: "/bestpractices" },
      { text: "Core Conventions", link: "/conventions" },
      { text: "Implementations", link: "/implementations" },
      { text: "Get Involved", link: "/get-involved" },
      { text: "FAQ", link: "/faq" },
      {
        text: "Glossary",
        items: [
          { text: "All Terms", link: "/glossary" },
          { text: "Benchmark", link: "/glossary#benchmark" },
          { text: "Cloud Optimized GeoTIFF", link: "/glossary#cloud-optimized-geotiff-cog" },
          { text: "CLS Token", link: "/glossary#cls-token" },
          { text: "Embedding Quantization", link: "/glossary#embedding-quantization" },
          { text: "Embedding Size", link: "/glossary#embedding-size" },
          { text: "Features", link: "/glossary#features" },
          { text: "Few-shot", link: "/glossary#few-shot" },
          { text: "Fine-tuning", link: "/glossary#fine-tuning" },
          { text: "GeoParquet", link: "/glossary#geoparquet" },
          { text: "Geospatial Embedding", link: "/glossary#geospatial-embedding" },
          { text: "Latent Space", link: "/glossary#latent-space" },
          { text: "Linear Probing", link: "/glossary#linear-probing" },
          { text: "Multimodal", link: "/glossary#multimodal" },
          { text: "Patch", link: "/glossary#patch" },
          { text: "PCA", link: "/glossary#pca" },
          { text: "Pretraining", link: "/glossary#pretraining" },
          { text: "Scene Embedding", link: "/glossary#scene-embedding" },
          { text: "Similarity Search", link: "/glossary#similarity-search" },
          { text: "t-SNE", link: "/glossary#t-sne" },
          { text: "Zarr", link: "/glossary#zarr" },
          { text: "Zero-shot", link: "/glossary#zero-shot" },
        ],
      },
    ],

    sidebar: false,

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zarr-developers/geozarr-site",
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message:
        'Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.',
      copyright: "Copyright © 2026 GeoZarr Developers",
    },

    editLink: {
      pattern:
        "https://github.com/zarr-developers/geozarr-site/edit/main/site/:path",
      text: "Edit this page on GitHub",
    },
  },
});
