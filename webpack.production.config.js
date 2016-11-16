'use strict';
const webpack   = require('webpack');
const path      = require('path');
const buildPath = path.resolve(__dirname, 'public', 'build');
module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill','./index.js'],
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: '/node_modules'
      },
      { 
        test: /\.css$/,
        loader: 'css-loader' 
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.json'],
    modulesDirectories: [
      'node_modules'
    ]
  }
};