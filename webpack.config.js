var webpack = require('webpack');
var path = require('path');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.jsx',
    './src/views/style.css'
  ],

  output: {
    filename: 'app.[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: './src',
    port: 8000,
    hot: true,
    historyApiFallback: true,
    open: true
  },

  plugins: [
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin(),
    new extractTextPlugin('app.[contenthash].bundle.css')
  ],

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                'browsers': ['last 2 versions']
                }
                }],
              'stage-3',
              'react'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.+)$/,
        use: [
          { loader: 'url-loader', options: { limit: 8192, name: './images/[name].[ext]' } }
          ]
      }
    ]
  }
};
