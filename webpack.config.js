const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

let inputFolderPath = "js\\";
let outputFolderPath = "dist\\tmp\\";
let bundleName = "bundle.js";

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }],
      }
    ],
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      }),

      new WebpackShellPlugin({
        onBuildStart:[], 
        onBuildEnd:['node node.bundle']
      }),

  ],
  externals: {
    myScoreUILib: 'MyScoreUILib'
  }, 
  context: path.resolve(__dirname, inputFolderPath),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, outputFolderPath),
    filename: "app.js"
  },
  devtool: 'source-map'
};
