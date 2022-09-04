const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    "logo-image": "./src/logo-image.js",
  },

  output: {
    filename: "[name].bundle.js", // [name] will be replaced with entry point name
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    clean: true, // Can be an object as well. For example: { dry: true, keep: /\.txt/ }
  },
  mode: "development",

  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true, // By default keeps in memory
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      chunks: ["hello-world"], // same as an entry point name
      template: "src/page-template.hbs",
      title: "Hello World",
      description: "Hello world page",
    }),
    new HtmlWebpackPlugin({
      filename: "logo-image.html",
      chunks: ["logo-image"], // same as an entry point name
      template: "src/page-template.hbs",
      title: "Logo Image",
      description: "Logo image page",
    }),
  ],
};
