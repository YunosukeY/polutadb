const webpack = require("webpack");

module.exports = {
  entry: `${__dirname}/src/main.tsx`,
  output: {
    path: `${__dirname}/dst`,
    filename: 'main.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
};