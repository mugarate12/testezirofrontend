const path = require('path')
const { merge } = require('webpack-merge')
const commum = require('./webpack.common.js')

module.exports = merge(commum, {
  mode: 'development',
  devServer: {
    port: 3000,
    hotOnly: true
  },
})
