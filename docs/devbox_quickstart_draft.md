# Setting up DevBox

This guide walks you through setting up your machine using DevBox—our internal tool for quickly setting up development environments across projects. DevBox helps to install tools and configurations for developers in a consistent way.

## What DevBox installs

DevBox sets up the following:

- Shell configurations
- CLI tools such as `jq` and `httpie`
- Project templates
- Internal authentication configuration

Each team can define its own extensions, which run after the base setup completes.

<!-- todo: how teams can do that -->

## Prerequisites

DevBox requires a Mac or Linux environment.

Before running DevBox, make sure you have the following:

- Homebrew (on Mac) or apt (on Linux)
- Git
- SSH keys
- Docker (required by some projects)

On Mac, you can check if Homebrew is installed by running:

```
brew --version
```

If it's not installed, you can install it from https://brew.sh.

## Install DevBox

The `devbox` repo contains the script to install DevBox.

Clone the `devbox` repo:

```
git clone git@github.com:example/devbox.git
```

Change into the repo directory:

```
cd devbox
```

Then run the install script:

```
./install.sh
```

This starts the bootstrap process, which adapts to the type of system it runs on (Mac or Linux). You may need to type your password a few times.

## Check install succeeded

Once the install script finishes, you should see a message saying “DevBox setup complete!”. Open a new terminal to get your new shell configuration.

If you don’t see that message, something probably didn’t finish correctly and you should check the [troubleshooting](#troubleshooting) guide below.

## Troubleshooting

If you run into problems during install, you can execute the debug script to try to diagnose what went wrong:

```
./debug.sh
```

Common issues include:

- Missing tools like Git or curl.
- Permission issues, such as running the install script as the wrong user.
- Network or firewall configuration.

You can also check the install logs saved in `/tmp/devbox.log`.
