# WebScript

WebScript is an in-development programming language for interacting with the web.

_Hack Club Arcade Reviewers, see [here](#arcade-reviewers)_

_Found a bug? Want a new feature? [Create an issue!](https://github.com/CragglesG/Easel/issues/new) (Please check for an existing one first to avoid duplicates!)_

_Want to contribute? You can find good first issues [here](https://github.com/CragglesG/Easel/contribute)._

## Table of Contents

- [Installation Guide](#installation-guide)
  - [Linux](#linux)
  - [macOS](#macos)
  - [Windows](#windows)
- [Command Line Usage](#command-line-usage)
- [Syntax](#syntax)
  - [Standard Library](#standard-library)
    - [request](#request)
- [Implementation Details](#implementation-details)

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

_WARNING: This has not yet been tested and may not work as intended._

This process is much the same as the process for Linux, with the only difference being slightly different download links.

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

_WARNING: This has not yet been tested and may not work as intended._

Before installing WebScript, you must enable execution of local scripts. You can do this using the following command in PowerShell (Run as administrator):

```
Set-ExecutionPolicy RemoteSigned
```

To install WebScript run the following in PowerShell (Do not run as administrator):

```
New-Item -ItemType Directory -Path "$env:USERPROFILE/.webscript"
git clone "https://github.com/CragglesG/Easel/" "$env:USERPROFILE/.webscript"
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";$env:USERPROFILE/.webscript/windows/", "User")
```

Done! You can now use the command `webscript` to run WebScript.

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
WebScript currently adopts a very similar syntax to [Hack Club's Easel](https://github.com/hackclub/easel/tree/main/languages/easel). (WebScript was orignally made using the tutorial, but is constantly being modified and improved.)
It also shares some similarities with the language it is written in, JavaScript. Below is a table of the current WebScript syntax:

| Operation                 | Syntax                                                             | Notes                                                                                                                 |
|---------------------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| Declare/Mutate Variable   | `prepare NAME as VALUE`                                            | This syntax is also used to modify object attributes, for example:  `prepare obj.attr as 'attr'`                      |
| Define Struct             | `type NAME has { PROPERTIES }`                                     | -                                                                                                                     |
| Create Instance of Struct | `prep NAME(PROPERTIES)`                                            | `NAME` should be the name of the struct. References to the struct after instance creation will refer to the instance. |
| Define Function           | `func NAME needs (PARAMS) { BODY }`                                | Whitespace is always ignored, but it is recommended for readability.                                                  |
| Return from Function      | `return VALUE`                                                   | -                                                                                                                     |
| Loop through Range        | `loop COUNTER through (START, END) { BODY }`                       | `COUNTER` should usually, by convention, be  `i`.                                                                     |
| Loop While True           | `while (CONDITION) { BODY }`                                       | -                                                                                                                     |
| If/Else-if/Else Statement | ` if (CONDITION) { BODY } elif (CONDITION) { BODY } else { BODY }` | -                                                                                                                     |
| Exit REPL                 | `exit()`                                                           | Only available in REPL mode.                                                                                          |
| Equivalent                | `==`                                                               | -                                                                                                                     |
| Not Equivalent            | `!=`                                                               | -                                                                                                                     |
| Greater Than              | `>`                                                                | -                                                                                                                     |
| Less Than                 | `<`                                                                | -                                                                                                                     |
| Addition                  | `+`                                                                | -                                                                                                                     |
| Multiplication            | `*`                                                                | -                                                                                                                     |
| Subtraction               | `-`                                                                | -                                                                                                                     |
| Division                  | `/`                                                                | -                                                                                                                     |
| Or                        | `\|\|`                                                             | -                                                                                                                     |
| Comment                   | `//`                                                               | -                                                                                                                     |
| String                    | `''` or `""`                                                       | Strings should be ended with the same type of quotation mark they begun with.                                         |

### Standard Library
WebScript's Standard Library provides numerous helpful methods and objects for you to use. Below is a table of all included methods and objects:

| Name      | Use                            | Description                                                                                    |
|-----------|--------------------------------|------------------------------------------------------------------------------------------------|
| `display` | `display(ARGS)`                | Prints `ARGS` to the console using `console.log()`. Accepts multiple arguments.                |
| `random`  | `random([MIN, MAX])`           | Chooses a random number between `MIN` and `MAX` using `Math.random()`.                         |
| `round`   | `round(NUMBER)`                | Rounds `NUMBER` to the nearest whole number using `Math.round()`.                              |
| `request` | `prepare NAME as request(URL)` | `request` is a request object that utilises `XMLHttpRequest`. Use is further documented below. |
| `crypto`  | `prepare NAME as crypto`       | `crypto` is a BlockchairAPI object. Use is further documented below                                 |

#### `request`
The `request` object is provided in the Standard Library to allow GET, POST, PUT, and DELETE requests to be easily sent through HTTP. A table of all attributes and methods is provided below:

| Method/Attribute                        | Use                             | Description                                                    |
|-----------------------------------------|---------------------------------|----------------------------------------------------------------|
| `request`                               | `prepare NAME as request(URL)`  | Prepares `NAME` as a `request` object with `URL` as `this.url` |
| `request.get(headers=[])`               | `request.get(HEADERS)`          | Sends a GET request with `HEADERS` to `this.url`               |
| `request.post(body=null, headers=[]`    | `request.post(BODY, HEADERS)`   | Sends a POST request with `BODY` and `HEADERS` to `this.url`   |
| `request.put(body=null, headers=[])`    | `request.put(BODY, HEADERS)`    | Sends a POST request with `BODY` and `HEADERS` to `this.url`   |
| `request.delete(body=null, headers=[])` | `request.delete(BODY, HEADERS)` | Sends a DELETE request with `BODY` and `HEADERS` to `this.url` |


If you find the above table unhelpful or hard to understand, here's a step-by-step example of how to use `request` to make a GET request to Google:

First, we need to prepare a `request` object with our chosen URL. We can do this by creating a variable:

```
prepare google as request('https://www.google.ie')
```

Now that we've prepared our request, we can send it! We're going to use a GET request to retrieve Google's homepage and print the data to the console:

```
prepare data as google.get()
display(data)
```

Notice how we didn't need to use any custom request headers, so we didn't pass in any arguments. If we wanted to include request headers, we would do it like this:

```
google.get([YOUR_HEADERS_HERE])
```

#### `crypto`
The `crypto` object allows you to query the Blockchair API directly from WebScript (up to 1400 times/day without an API key) to retrieve information from 14 blockchains. A table of all attributes and methods is provided below:

| Method/Attribute                                     | Use                                  | Description                                                    |
|------------------------------------------------------|--------------------------------------|----------------------------------------------------------------|
| `crypto`                                             | `prepare NAME as crypto`             | Prepares `NAME` as a `BlockchairAPI` object                    |
| `crypto.getPrice(crypto="bitcoin", convertTo="usd")` | `crypto.getPrice(CRYPTO, CONVERTTO)` | Returns the price of `CRYPTO` in `CONVERTTO`. `CONVERTTO` can be `"bitcoin"`, `"btc"`, or `"usd"`             |
| `crypto.getStats(crypto="bitcoin")`                 | `crypto.getStats(CRYPTO)`        | Returns all data on `CRYPTO` in JSON  |
| `crypto.getOther(url)`                 | `crypto.getOther(URL)`         | Returns JSON data from the specified Blockchair API link. |
| `crypto.setAPIKey(key)` | `crypto.setAPIKey(KEY)` | Sets `KEY` as the key to be used in all queries. |

## Implementation Details
This information is mostly for those who would like to contribute to WebScript but are not sure about how the underlying code works. It assumes a basic understanding of how programming languages are made in general. There are some comments throughout WebScript's code to help you to understand it.

WebScript recognises the following tokens:

( ) { } [ ] . , : | ! && == !=== > >= < <= + - * \ `EOF` `Keyword` `Identifier` `String` `Number` 

WebScript recognises the following as keywords:

prepare, as, type, prep, has, func, needs, return, loop, through, while, if, elif, else

WebScript's AST contains the following nodes:

Literal, Array, Var, Binary, Func, Return, For, While, Conditional, Set, Struct, Instance, Call, Get, Unary




<br><br><br><br><br><br><br>

#### Arcade Reviewers
_Previous scrapbook post: This project started off with the Easel tutorial, before I grew it into it's own language. The majority of the lexer, parser, and interpreter were made using the Easel tutorial, with some differences in implementation, formatting, comments, and the language's syntax. I have since then grown the Standard Library to make WebScript about the web, added a test file, added shell and powershell files to run WebScript, added quick-install shell files, and created all of the above documentation. I started this project with almost no knowledge of JavaScript or how to make a programming language, so it has taken me a while longer to implement this than it probably should have. I used no AI in the process._

_Current scrapbook post:_ All of the changes made in the latest version of WebScript (v0.2.0) were completely original. I did not use any AI.

**Thanks for reviewing my project!**
