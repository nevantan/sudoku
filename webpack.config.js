const path = require('path');
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: ['./src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: 'cheap-eval-course-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
