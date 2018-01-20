var webpack = require('webpack');
var path = require('path');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [srcPath + '/index.js', srcPath + '/views/style.css'],

  output: {
    filename: 'app.[hash].bundle.js',
    path: distPath,
    publicPath: '/'
  },

  plugins: [
    new cleanWebpackPlugin([distPath], { root: projectRootPath }),
    new htmlWebpackPlugin({ template: srcPath + '/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new extractTextPlugin('app.[contenthash].bundle.css')
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }, { loader: 'postcss-loader' }]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.+)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192, name: './images/[name].[ext]' }
          }
        ]
      }
    ]
  }
};
