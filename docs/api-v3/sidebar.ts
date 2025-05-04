import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-v3/open-food-facts-open-api-v-3-under-development",
    },
    {
      type: "category",
      label: "Read Requests",
      link: {
        type: "doc",
        id: "api-v3/read-requests",
      },
      items: [
        {
          type: "doc",
          id: "api-v3/get-product-by-barcode",
          label: "READ Product - Get information for a specific product by barcode (API V3)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api-v3/patch-api-v-3-product-barcode",
          label: "WRITE Product - Create or update product, or analyze test product (API V3 - Implementation in progress)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api-v3/get-api-v-3-taxonomy-suggestions-taxonomy",
          label: "Get taxonomy entries suggestions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v3/get-api-v-3-tag-tagtype-tag-or-tagid",
          label: "Get knowledge panels for a tag",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v3/post-api-v-3-product-revert",
          label: "Revert a product to a previous revision",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
