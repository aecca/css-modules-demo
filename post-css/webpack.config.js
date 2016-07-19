var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var values = require('postcss-modules-values');

module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,  
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') 
      }
    ]
  },
  postcss: [ 
    values 
  ],
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true })
  ]

};