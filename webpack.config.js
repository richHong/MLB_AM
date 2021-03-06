'use strict';
const path    = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'source-map', 
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080', 
    './index.js' 
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/' 
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          compact: false
        },
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg)$/, 
        loader: 'url?limit=25000'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};