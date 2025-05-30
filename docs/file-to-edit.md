# Syncing environment variables with envsync

This guide helps developers understand how to use the `envsync` tool to synchronize environment variables between local `.env` files and the cloud.

`envsync` is a command line based utility for syncing environment variables with a remote secret storage, for example HashiCorp Vault or AWS SSM. It reduces the friction of managing and updating secrets across multiple different environments and projects by letting you push or pull values from a remote store easily.

It’s mostly useful in scenarios where you're working in multiple environments (such as staging, development, and production) and need to ensure that secrets don't become outdated or go missing.

## How it Works

`envsync` reads a `.env` file that's on your machine and then either updates it with new values from the secrets manager, or else it pushes the values in your file up to the cloud store. So there are 2 main modes:

1. **Pull:** updates your local `.env` with whatever values exist in the remote source of secrets.
2. **Push:** sends the values from your `.env` file to the remote cloud-based store.

There is also a **diff** command which helps to see what values would be changed without actually modifying anything.

## Setup and requirements

### Install envsync

In order to get started, you need to have `envsync` installed globally. You can do this by running:

```bash
npm install -g envsync
```

This installs the latest version from the NPM registry and makes it available on your path.

### Secret manager credentials

You'll also need credentials or access to whatever secret manager you're using. Right now it supports AWS SSM and Vault but other providers are being added in the near future.

Make sure you have the right permissions for reading and writing secrets. If you're using Vault for example, the token needs to have capabilities on the given path.

## Using the tool

Here are the different ways you can use the tool.

### Pulling values from the secrets store

To fetch values from the remote secrets store and overwrite your local `.env` file, run the following:

```bash
envsync pull --provider aws --env-file .env
```

#### Parameters

- **`--env-file`**: tells the tool where your local file is. Default: `.env`.
- **`--provider`**: what secret store to use. Possible values: `aws`, `vault`.
- **`--dry-run`**: no values are actually written, but you can see what would have changed.

### Pushing values to the secrets store

To upload values from your local `.env` file to the secrets manager, run the following:

```bash
envsync push --provider aws --env-file .env
```

#### Parameters

- **`--env-file`**: tells the tool where your local file is. Default: `.env`.
- **`--provider`**: what secret store to use. Possible values: `aws`, `vault`.
- **`--dry-run`**: no values are actually written, but you can see what would have changed.

### Viewing differences

You can check for differences between local and remote values without doing a push or a pull:

```bash
envsync diff --provider aws
```

It displays a side-by-side comparison of differences.

<!-- It shows a simple side-by-side diff of what’s different. -->

This command is helpful to avoid accidentally overwriting values and making sure everything is in sync before taking an action.

#### Parameters

- **`--dry-run`**: no values are actually written, but you can see what would have changed.

## Security notes

Never check your `.env` files into source control. `envsync` does not encrypt or secure local `.env` files—it assumes the file is already on a trusted device.

You should use environment variables or credential stores to securely manage all credentials required to access secret stores.

## Conclusion

Managing secrets is a complicated and error-prone task, and keeping different environments in sync can be a challenge.

With `envsync`, your team can avoid problems related to missing or outdated environment variables, and keep secrets consistent across the board.
