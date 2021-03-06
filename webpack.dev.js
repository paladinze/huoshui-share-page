/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcDir = path.resolve(__dirname, './app')
const distDir = path.resolve(__dirname, './dist')
const semanticDir = path.resolve(srcDir, './styles/semantic/dist/')
const semanticTheme = path.resolve(semanticDir, './themes')
const semanticCSS = path.resolve(semanticDir, './semantic.min.css')
const imageDir = path.resolve(srcDir, './images/')
const distImgDir = path.resolve(distDir, './images/')
const vendorDir = path.resolve(distDir, './vendor/')
const vendorTheme = path.resolve(distDir, './vendor/themes')

module.exports = env => ({
  devtool: 'cheap-module-source-map',
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: distDir,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true,
    port: 7070,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: { emitWarning: true },
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        use: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        include: srcDir,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { modules: true },
          },
          {
            loader: 'sass-loader',
          }],
          fallback: {
            loader: 'style-loader',
          },
        }),
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new CopyWebpackPlugin([
          { from: semanticTheme, to: vendorTheme, force: true },
          { from: semanticCSS, to: vendorDir, force: true },
          { from: imageDir, to: distImgDir, force: true },
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
})
