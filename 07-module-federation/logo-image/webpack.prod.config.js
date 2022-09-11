const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/logo-image.js",

  output: {
    filename: "[name].[contenthash].js", // [name] will be replaced with entry point name
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9002/",
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
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
      filename: "logo-image.html",
      template: "src/page-template.hbs",
      title: "Logo Image",
      description: "Logo image page",
    }),
    new ModuleFederationPlugin({
      name: "LogoImageApp",
      filename: "remoteEntry.js",
      exposes: {
        "./LogoImagePage":
          "./src/components/logo-image-page/logo-image-page.js",
      },
    }),
  ],
};
