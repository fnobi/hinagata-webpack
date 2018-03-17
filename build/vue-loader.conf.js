'use strict'
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: {
    scss: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: [ 'src/scss' ],
        },
      },
    ],
  },
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
