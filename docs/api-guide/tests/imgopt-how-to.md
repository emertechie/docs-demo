# Optimize images with `imgopt`

This guide shows how to use the `imgopt` command line tool to optimize images.

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

| Parameter | Required | Description                                                                                                                                                                                                                 |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`   | yes      | Path to an individual image, or a folder with images to optimize.                                                                                                                                                           |
| `output`  | no       | Path to the folder to write optimized images. If not provided, images are written to the current working directory. **Note:** Cannot be the same as the `input` directory, to prevent overwriting original images.          |
| `width`   | yes      | The maximum width for output images. Actual output width may be less than this to preserve original image aspect ratio.                                                                                                     |
| `quality` | no       | A number from 1 to 100 representing the JPEG quality value, where 100 means minimal compression and 1 means maximum. A lower value results in smaller file size, but reduced image quality. If not provided, defaults to 90 |

## Troubleshooting

- **Output path:** The `output` path cannot be the same as the `input` path, to prevent overwriting original images. If they are the same, the tool terminates with a validation error.
