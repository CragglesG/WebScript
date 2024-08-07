# WebScript

WebScript is an in-development programming language for interacting with the web.

_Found a bug? Want a new feature? [Create an issue!](https://github.com/CragglesG/Easel/issues/new) (Please check for an existing one first to avoid duplicates!)_

_Want to contribute? You can find open issues that need attention [here](https://github.com/CragglesG/Easel/issues)._

## Table of Contents

- [Installation guide](#installation-guide)
  - [Linux](#linux)
  - [macOS](#macos)
  - [Windows](#windows)
- [Command Line Usage](#command-line-usage)

## Installation Guide

While the installation process is quick and straightfoward, it differs slightly by OS. Please skip to the installation guide for the OS you are using.

### Linux

To quick install WebScript to `~/.webscript`, run the following command:

```
wget https://github.com/CragglesG/Easel/blob/main/linux/install.sh && chmod +x install.sh && ./install.sh
```

After this command has executed, you can run WebScript using the command `webscript`.

---

If you would rather inspect `install.sh` first to see what's happening under the hood, you can do so by running the above commands separately. This first command downloads `install.sh` from this repository:

```
wget https://github.com/CragglesG/Easel/blob/main/linux/install.sh
```

If you would like to inspect `install.sh`, you can do this now. To make this file executable so that we can run it, we need to change its permissions:

```
chmod +x install.sh
```

Lastly, we'll run the file, which will automatically install WebScript into the `.webscript` folder inside your home directory:

```
./install.sh
```

Done! You can now use the command `webscript` to run WebScript.

### macOS

_Support for macOS is coming soon_

### Windows

_Support for Windows is coming soon_

## Command Line Usage
Once installed, you can use WebScript with the `webscript` command. To enter REPL, simply run `webscript` alone:
```
webscript
```
To run a WebScript file, run the following, replacing `FILE` with the desired filename:
```
webscript FILE
```
WebScript's debug mode will output the AST (Abstract Syntax Tree) and tokens generated into the files `ast.json` and `tokens.json`, respectively. This can be useful for debugging while contributing. To run a file in debug mode, add the flag `--dbg`:
```
webscript FILE --dbg
```

