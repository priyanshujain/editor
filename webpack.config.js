var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/static/index.html"
    })
  ]
};
