const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  devServer: {
    contentBase: DIST_DIR,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIR, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
