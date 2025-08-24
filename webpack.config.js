// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'dist'),   // Render "Publish Directory" = dist
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif|ico|pdf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][hash][ext][query]' },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'index.html'),
      inject: 'body',
    }),
    // Copies anything you place in /public to /dist (favicon, PDFs, static images, etc.)
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
          filter: (p) => !/\/\.|index\.html$/.test(p), // skips dotfiles & index.html
        },
      ],
    }),
  ],

  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { passes: 2, drop_console: true, drop_debugger: true },
          mangle: true,
          format: { comments: false },
        },
        extractComments: false,
      }),
    ],
  },




  mode: 'production',
  devtool: false,

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 3000,
  },
}