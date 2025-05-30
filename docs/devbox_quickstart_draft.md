
# Quickstart: setting up devbox

This guide will walk you through setting up your machine using DevBox, which is our internal tool for quickly setting up development environments across projects. DevBox helps to install tools and configs for devs in a consistent way.

## pre-requisites

Before running DevBox, make sure you have the following things:

* Homebrew (on mac) or apt (on ubuntu)
* Git
* SSH keys
* Some projects require Docker too

You can check if you have Homebrew installed by typing this:

```
brew --version
```

If not, you can go install it from https://brew.sh

## Installing DevBox

To get DevBox, clone the devbox repo:

```
git clone git@github.com:example/devbox.git
```

Then go into the directory:

```
cd devbox
```

And then run the install script:

```
./install.sh
```

This will start the bootstrap process. You may need to type your password a few times.

The script checks what system you’re on (Mac or Linux) and will do different things depending on that.

### Problems during install

If you run into problems, try running:

```
./debug.sh
```

It will run a bunch of checks and tell you what went wrong. Common issues include:

- Missing tools like Git or curl
- Permissions problems (e.g. running as wrong user)
- Network/firewall stuff

Also, you can look at the logs which are saved in `/tmp/devbox.log`.

## What DevBox installs

DevBox sets up the following things:

- Shell configs
- CLI tools (like jq, httpie, etc)
- Project templates
- Internal auth config

Each team can also add its own “extensions” that get run after the base setup.

## wrapping up

Once install finishes, you should see a message saying “DevBox setup complete!”. Open a new terminal to get your new shell config.

If you don’t see that message, something probably didn’t finish correctly.
