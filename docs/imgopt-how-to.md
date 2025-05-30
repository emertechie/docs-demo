# Optimize images with `imgopt`

`imgopt` is a tool that resizes and compresses images for the web. This guide shows how to use `imgopt` to optimize images before deploying to production or uploading to a CDN.

## Why optimize images?

Optimizing an image reduces its file size which has the following benefits:

- **Cost savings:** smaller images reduce transfer bandwidth costs
- **Faster renders:** smaller images render faster, especially on mobile devices with low-bandwidth connections

## Install

Install `imgopt` using `npm`:

```bash
npm install -g imgopt
```

## Usage

Pass command line parameters to control how `imgopt` optimizes images.

Example usage:

```bash
imgopt --input ./images --output ./optimized --width 1200 --quality 80
```

### Parameters

| Parameter | Type   | Required | Description                                                                                                                                                                                                        |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `input`   | string | yes      | Path to an individual image, or a folder with images to optimize.                                                                                                                                                  |
| `output`  | string | no       | Path to the folder to write optimized images. If not provided, images are written to the current working directory. **Note:** Cannot be the same as the `input` directory, to prevent overwriting original images. |
| `width`   | number | yes      | The maximum width, in pixels, for output images. Actual output width may be less than this to preserve original image aspect ratio.                                                                                |
| `quality` | number | no       | JPEG image quality (1-100). A lower value means smaller file size, but more compression. Default: 90                                                                                                               |

## Troubleshooting

- **Output path:** The `output` path cannot be the same as the `input` path, to prevent overwriting original images. If they are the same, the tool terminates with a validation error.
