const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',          // ensure a single named entry
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',    // <-- unique filename per entry
    chunkFilename: '[name].[contenthash].js', // <-- unique filename for lazy chunks
    publicPath: '/',                        // for React Router
    clean: true,                            // clears old files
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg|webp|avif|pdf)$/i, type: 'asset/resource' },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new HtmlWebpackPlugin({ template: './client/index.html' }),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: 'single',
  },
  mode: 'production',
  devtool: false,
  devServer: { historyApiFallback: true },
};