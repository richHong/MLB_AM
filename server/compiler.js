'use strict';
const Webpack          = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig    = require('./../webpack.config.js');

module.exports = () => {
  let bundleStart = null;
  const compiler = Webpack(WebpackConfig);
  
  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });
  
  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });
  
  const bundler = new WebpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });
  
  bundler.listen(8080, () => console.log('Bundling project, please wait...'));
};
