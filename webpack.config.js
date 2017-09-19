var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: { path: __dirname, filename: './app/js/render.js' },
devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader?stage=0',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        
      }
    ]
  },
};