const path = require('path');

module.exports = {
  entry: {
    index: './scripts/index.js',
    base: './scripts/util/base.js',
  },
  stats: 'errors-only',
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
