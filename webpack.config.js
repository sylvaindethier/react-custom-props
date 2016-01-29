/* eslint require-jsdoc:0 */
var webpack = require('webpack');
var path = require('path');
var resolve = path.resolve;

var srcPath = resolve(__dirname, 'lib');
var distPath = resolve(__dirname, 'dist');
var library = 'ReactConfProps';

function isPROD(env) {
  return env === undefined || env === 'prod' || env === 'production';
}
function isDEV(env) {
  return env === 'dev' || env === 'development';
}
function isTEST(env) {
  return env === 'test';
}

function getPlugins(env) {
  var plugins = [
    // pass process.env.NODE_ENV
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    // sort by occurence
    new webpack.optimize.OccurenceOrderPlugin()
  ];

  switch (true) {
    case isPROD(env):
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true, sourceMap: true
      }));
      break;
    case isDEV(env):
      break;
    default:
      break;
  }

  // no errors
  plugins.push(new webpack.NoErrorsPlugin());

  return plugins;
}

module.exports = (function(env) {
  return {
    entry: {
      [library]: resolve(srcPath, 'index.js')
    },
    output: {
      filename: '[name].js',
      path: distPath,
      library,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },

    // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    target: isTEST(env) ? 'node' : 'web',
    plugins: getPlugins(env),
    module: {loaders: [
      // Babel & ESLint loaders for JS & JSX files
      {
        loaders: ['eslint-loader'],
        include: [srcPath],
        test: /\.js$/
      }
    ]},

    stats: {colors: true},
    debug: true,
    // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
    // and https://webpack.github.io/docs/configuration.html#devtool
    // devtool: isPROD(env) ? 'source-map' : 'eval-source-map',
    devtool: 'source-map'
  };
})(process.env.NODE_ENV);
