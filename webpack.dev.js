const path = require('path')
const { merge } = require('webpack-merge')
const commum = require('./webpack.common.js')

module.exports = merge(commum, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
})
