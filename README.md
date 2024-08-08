# WebScript

WebScript is an in-development programming language for interacting with the web.

_Found a bug? Want a new feature? [Create an issue!](https://github.com/CragglesG/Easel/issues/new) (Please check for an existing one first to avoid duplicates!)_

_Want to contribute? You can find good first issues [here](https://github.com/CragglesG/Easel/contribute)._

## Table of Contents

- [Installation guide](#installation-guide)
  - [Linux](#linux)
  - [macOS](#macos)
  - [Windows](#windows)
- [Command Line Usage](#command-line-usage)
- [Syntax](#syntax)

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

This process is much the same as the process for Linux, with the only difference being slightly different download links. However, this process not yet been tested on macOS and may not function as intended.

**WebScript requires that your default shell is set to zsh. If you are running macOS Catalina 10.15 or higher, and you have not changed your default shell, you are already using zsh.**


To quick install WebScript to `~/.webscript`, run the following command:

```
wget https://github.com/CragglesG/Easel/blob/main/macos/install.sh && chmod +x install.sh && ./install.sh
```

After this command has executed, you can run WebScript using the command `webscript`.

---

If you would rather inspect `install.sh` first to see what's happening under the hood, you can do so by running the above commands separately. This first command downloads `install.sh` from this repository:

```
wget https://github.com/CragglesG/Easel/blob/main/macos/install.sh
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


### Windows

_Support for Windows is coming soon._

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

## Syntax
WebScript currently adopts a very similar syntax to [Hack Club's Easel](https://github.com/hackclub/easel/tree/main/languages/easel). (It was orignally made using the tutorial, but is constantly being modified and improved.)
It also shares some similarities with the language it is written in, JavaScript. Below is a table of the current WebScript syntax:

| Operation                 | Syntax                                       | Notes                                                                                                                             |
|---------------------------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Declare/Mutate Variable   | `prepare NAME as VALUE`                      | This syntax is also used to modify object attributes, for example:  `prepare obj.attr as 'attr'`                                  |
| Define Struct             | `type NAME has { PROPERTIES }`               | N/A                                                                                                                               |
| Create Instance of Struct | `prep NAME(PROPERTIES)`                      | `NAME` should be the name of the struct. References to the name of the struct after instance creation will refer to the instance. |
| Define Function           | `func NAME needs (PARAMS) { BODY }`          | Whitespace is always ignored, so it is not necessary here, but it is recommended for readability.                                 |
| Return from Function      | `finished VALUE`                             | N/A                                                                                                                               |
| For Loop                  | `loop COUNTER through (START, END) { BODY }` | `COUNTER` should usually, by convention, be  `i`.                                                                                 |
