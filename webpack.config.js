const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.jsx'],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist', 'node_modules'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /config\.json$/,
        loader: 'special-loader',
        type: 'javascript/auto',
      },
    ],
  },
  devServer: {
    contentBase: './public/',
    watchContentBase: true,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new ExtractTextPlugin('bundle.css'),
  ],
};
