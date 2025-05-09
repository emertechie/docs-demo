# How to create a remark plugin

This guide shows you how to create and use a [remark](https://remark.js.org/) plugin. remark is a JavaScript-based tool that transforms markdown with plugins.

The plugin created in this guide automatically adds an anchor link to all headers in a markdown document. For example, a markdown header of `# Hello world`, when used with the plugin from this guide, produces the following HTML:

```html
<h1 id="hello-world">Hello world<a href="#hello-world"> 🔗</a></h1>
```

## Requirements

Ensure you have [Node.js](https://nodejs.org) installed.

## Set up project

Create a new directory for the project called `remark-header-links`. Open a terminal in that directory and run the following command to create a `package.json` file.

```
npm init -y; npm pkg set type="module";
```

## Step 1: Install dependencies

Install the following packages to simplify the plugin code needed.

```bash
npm install unist-util-visit mdast-util-to-string slugify
```

To be able to test the plugin from the command line, and to convert from markdown to HTML, also install the following packages.

```bash
npm install --save-dev remark-cli remark-rehype rehype-stringify
```

## Step 2: Write the plugin code

Create an `index.js` file in the project directory and paste in the code below.

```js
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import slugify from "slugify";

export default function remarkHeaderLinks() {
  return (tree) => {
    // Use the `visit` helper to visit all header nodes
    visit(tree, "heading", (headerNode) => {
      // Convert the header node object to it's string representation
      const text = toString(headerNode);

      // Create an id from the header text, and set that as the header node id
      const id = slugify(text, { lower: true, strict: true });
      headerNode.data = headerNode.data || {};
      headerNode.data.hProperties = headerNode.data.hProperties || {};
      headerNode.data.hProperties.id = id;

      // Append a link node, pointing to the header id
      headerNode.children.push({
        type: "link",
        url: `#${id}`,
        children: [{ type: "text", value: " 🔗" }],
      });
    });
  };
}
```

## Step 3: Test the plugin

Add an `input.md` file in the project directory with some example markdown, including some markdown headers of course.

At the terminal, run the following command to convert the `input.md` file into `output.html`, using the custom plugin to add links for all headers.

```curl
npx remark input.md --use ./index.js --use remark-rehype --use rehype-stringify -o output.html
```

Open the `output.html` file and make sure all headers have an anchor link.

## Learn more

You can learn more about remark plugins at the [remark GitHub repository](https://github.com/remarkjs/remark?tab=readme-ov-file#plugins).
