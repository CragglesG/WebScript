# WebScript
WebScript is an in-development programming language designed to be simple but powerful.
<br><br><br><br>
## Table of Contents
* [Installation guide](#installation-guide)
    * [Linux](#linux)
    * [macOS](#macos)
    * [Windows](#windows)


## Installation Guide
While the installation process is quick and straightfoward, it differs slightly by OS. Please skip to the installation guide for the OS you are using.

### Linux
To quick install WebScript to `~/.webscript`, run the following command:
```
wget https://github.com/CragglesG/Easel/blob/linux/install.sh && chmod +x install.sh && ./install.sh
```
After this command has executed, you can run WebScript using the command `webscript`.
<br>

***

<br>

If you would rather inspect `install.sh` first to see what's happening under the hood, you can do so by running the above commands separately. This first command downloads `install.sh` from this repository:

```
wget https://github.com/CragglesG/Easel/blob/linux/install.sh
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