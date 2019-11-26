const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: { app: ['@babel/polyfill', './src/client/app.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [new WriteFilePlugin()],
};
