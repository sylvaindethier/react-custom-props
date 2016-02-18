import webpack from 'webpack';
import { resolve } from 'path';

const srcPath = resolve(__dirname, 'lib');
const distPath = resolve(__dirname, 'dist');
const library = 'ReactCustomProps';

const isPROD = process.env.NODE_ENV === 'production';
// const isDEV = process.env.NODE_ENV === undefined ||
//   process.env.NODE_ENV === 'dev' ||
//   process.env.NODE_ENV === 'development';
const isTEST = process.env.NODE_ENV === 'test';
const isMIN = Boolean(process.env.MINIFY);

const plugins = [
  // pass process.env.NODE_ENV
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  // sort by occurence
  new webpack.optimize.OccurenceOrderPlugin(),
  // no errors
  new webpack.NoErrorsPlugin(),
];
if (isPROD) { plugins.push(new webpack.optimize.DedupePlugin()); }
if (isMIN) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: true,
  }));
}


export default {
  entry: {
    [library]: resolve(srcPath, 'index.js'),
  },
  output: {
    filename: '[name]' + (isMIN ? '.min' : '') + '.js',
    path: distPath,
    library,
    libraryTarget: 'umd',
  },
  externals: { react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
  } },

  // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  target: isTEST ? 'node' : 'web',
  plugins,
  module: { loaders: [
    // ESLint &  Babel loaders for JS files
    {
      loaders: ['babel-loader', 'eslint-loader'],
      include: [srcPath],
      test: /\.js$/,
    },
  ] },

  stats: { colors: true },
  debug: true,
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  devtool: isPROD ? 'source-map' : '#inline-source-map',
};
