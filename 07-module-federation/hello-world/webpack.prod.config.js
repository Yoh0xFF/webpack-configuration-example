const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/hello-world.js",

  output: {
    filename: "[name].[contenthash].js", // [name] will be replaced with entry point name
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/static/",
    clean: true, // Can be an object as well. For example: { dry: true, keep: /\.txt/ }
  },
  mode: "production",

  optimization: {
    splitChunks: {
      chunks: "all", // Extract common libraries in the separate bundles
      minSize: 10 * 1024, // 10kb, default value is 30kb, only libraries exceeding the minSize will be extracted
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      template: "src/page-template.hbs",
      title: "Hello World",
      description: "Hello world page",
    }),
  ],
};
