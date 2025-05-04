import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-v2/open-food-facts-open-api",
    },
    {
      type: "category",
      label: "Read Requests",
      link: {
        type: "doc",
        id: "api-v2/read-requests",
      },
      items: [
        {
          type: "doc",
          id: "api-v2/get-product-by-barcode",
          label: "Get information for a specific product by barcode",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/get-cgi-ingredients-pl",
          label: "Performing OCR on a Product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/get-search",
          label: "Search for Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/get-cgi-suggest-pl",
          label: "Get Suggestions to Aid Adding/Editing Products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/get-cgi-nutrients-pl",
          label: "Get a nested list of nutrients that can be displayed in the nutrition facts table for a specific country and language",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Write Requests",
      link: {
        type: "doc",
        id: "api-v2/write-requests",
      },
      items: [
        {
          type: "doc",
          id: "api-v2/get-cgi-product-image-upload-pl",
          label: "Add a Photo to an Existing Product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v2/post-cgi-product-image-crop-pl",
          label: "Crop A Photo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-v2/get-cgi-product-image-crop-pl",
          label: "Rotate A Photo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/post-cgi-product-jqm-2-pl",
          label: "Add or Edit A Product",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "api-v2/authentication",
      },
      items: [
        {
          type: "doc",
          id: "api-v2/get-cgi-session-pl",
          label: "Login and obtain a session cookie",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Personal search",
      items: [
        {
          type: "doc",
          id: "api-v2/get-attribute-groups",
          label: "Get the list of attributes available for personal search.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-v2/get-preferences",
          label: "Get the weights corresponding to attributes preferences\nto compute personal product\n",
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
          id: "api-v2/post-cgi-product-image-unselect-pl",
          label: "Unselect A Photo",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
