# image compress cli
An usefull cli tool for compress images. base on `[imagemin](https://github.com/imagemin/imagemin)`.

## Install
```bash
npm i -g image-compress-cli
```

## Usage

```bash
Usage: image-compress [source image path]

Options:
  -V, --version         output the version number
  -c --config <config>  image config file
  -h, --help            output usage information
```

default source path is `src`.

## Config
The configuration will read `.image.json` in the current directory if is exist, otherwise it will use default config.

### default config

``` json
{
  "mozjpeg": {
    "progressive": true,
    "quality": 75
  },
  "optipng": {
    "enabled": false
  },
  "pngquant": {
    "quality": "75-90",
    "speed": 4
  },
  "gifsicle": {
    "interlaced": false
  }
}
```
