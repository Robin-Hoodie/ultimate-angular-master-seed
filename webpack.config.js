var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    'app': path.join(__dirname, 'src/app/root.module.js'),
    'vendor': path.join(__dirname, 'src/app/vendor.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    port: 4000,
    open: true
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(woff(2)?)$/,
        loader: 'url?limit=10000&mimetype=application/font-wiff'
      },
      {
        test: /\.(eot|ttf|)$/,
        loader: 'file'
      },
      {
        test: /\.(png|ico)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}