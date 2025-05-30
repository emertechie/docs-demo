# Syncing Env Vars with envsync

This guide is designed to help developers understand how to use the `envsync` tool to synchronise environment variables between `.env` files that are local and the cloud.

`envsync` is a command line based utility for syncing environment variables with a remote secret storage, for example HashiCorp Vault or AWS SSM. It was created to reduce the friction of managing and updating secrets across multiple different environments and projects.

It’s mostly useful in scenarios where you're working in multiple environments (such as staging, development, and production) and need to ensure that secrets don’t become outdated or go missing. This tool solves that by letting you push or pull values from a remote store easily.

## How it Works

Basically the tool reads a `.env` file that’s on your machine and then either updates it with new values from the secrets manager, or else it pushes the values in your file up to the cloud store. So there are 2 main modes:

1. **Pull** – updates your local `.env` with whatever values exist in the remote source of secrets.
2. **Push** – sends the values from your `.env` file to the remote cloud-based store.

There is also a **diff** command which helps to see what values would be changed without actually modifying anything.

## Setup and Requirements

In order to get started, you need to have `envsync` installed globally. You can do this by running:

```bash
npm install -g envsync
```

This installs the latest version from the NPM registry and makes it available on your path.

You’ll also need credentials or access to whatever secret manager you're using. Right now it supports AWS SSM and Vault but other providers are being added in the near future.

Make sure you have the right permissions for reading and writing secrets. If you're using Vault for example, the token needs to have capabilities on the given path.

## Using the Tool

Here are some of the ways to use it.

### Pulling values from the secrets store

You can get the remote values and overwrite your local `.env` by running the command:

```bash
envsync pull --provider aws --env-file .env
```

The `--env-file` flag tells the tool where your local file is. If you don’t set this it defaults to `.env`.

This will write values to your local file, overwriting any values already in there with those from the cloud.

It also supports dry-run mode:

```bash
envsync pull --dry-run
```

Dry run means no values are actually written, but you can see what would have changed.

### Pushing local env values to remote

If you have a `.env` file and you want to upload those values to the secrets manager, use:

```bash
envsync push --provider aws
```

This assumes a local file `.env` exists in your working directory. It can also take the `--env-file` flag if your file is named something different or located elsewhere.

### Viewing differences

You can check for differences between local and remote values without doing a push or a pull:

```bash
envsync diff --provider aws
```

It shows a simple side-by-side diff of what’s different.

This command is helpful to avoid accidentally overwriting values and making sure everything is in sync before taking an action.

## Security Notes

Never check your `.env` files into source control. `envsync` does not encrypt or secure local `.env` files—it assumes the file is already on a trusted device.

You should make sure that all credentials required to access secret stores are handled securely via environment variables or secure credential stores.

## Conclusion

Managing secrets is a complicated and error-prone task, and keeping different environments in sync can be a challenge.

With `envsync`, your team can avoid problems related to missing or outdated environment variables, and keep secrets consistent across the board.
