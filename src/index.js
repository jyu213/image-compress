
const path = require('path')
const fs = require('fs')

module.exports = (options) => {
  const { imageConfig, imagePath } = options

  let config = {
    // output: '',
    module: {
      rules: [{
        test: /\.(?:jpg|png|gif|svg)$/,
        loader: require.resolve('image-webpack-loader'),
        options: imageConfig,
        include: imagePath
      }]
    },
    mode: 'production'
  }

  return config
}