const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // "auto" public path will use absolute urls for the assets,
    // default value starting from the Webpack v5.
    // If we serve assets from CDN,
    // we need to set the correct url here as public path.
    publicPath: "dist/",
  },
  mode: "none",

  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.mp4$/,
        // if less then 8kb will use asset/inline, or use asset/resource otherwise.
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3kb, 8kb is a default value
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
    ],
  },
};
