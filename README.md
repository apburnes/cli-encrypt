cli-encrypt
===========

A simple encrypt/decrypt cli for a file.

## How To

__Install__

```bash
$> npm i -g @apburnes/cli-encrypt
```

__Usage__

```bash

# Commands:
#   encrypt
#   decrypt
#   help

# Options:
#   -f : <Input File>
#   -o : <Output File>
#   -p : <Password>


$> cli-encrypt help

$> cli-encrypt encrypt -f <file.zip> -o <file.zip.enc> -p <password>

$> cli-encrypt decrypt -f <file.zip.enc> -o <file.zip> -p <password>

```

## Contact

Andrew Burnes
