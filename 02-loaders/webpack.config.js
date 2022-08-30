const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "none",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // order is important
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // order is important
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
