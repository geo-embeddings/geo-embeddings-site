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
    ["link", { rel: "canonical", href: "https://geoembeddings.org" }],
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
      { text: "Implementations", link: "/implementations" },
      { text: "Get Involved", link: "/get-involved" },
      { text: "FAQ", link: "/faq" },
      {
        text: "Resources",
        items: [],
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
