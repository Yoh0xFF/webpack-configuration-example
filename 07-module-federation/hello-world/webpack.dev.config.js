const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/hello-world.js",

  output: {
    filename: "[name].bundle.js", // [name] will be replaced with entry point name
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:9001/",
    clean: true, // Can be an object as well. For example: { dry: true, keep: /\.txt/ }
  },
  mode: "development",

  devServer: {
    port: 9001,
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
      template: "src/page-template.hbs",
      title: "Hello World",
      description: "Hello world page",
    }),
    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWorldButton":
          "./src/components/hello-world-button/hello-world-button.js",
      },
    }),
  ],
};
