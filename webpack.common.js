const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// html loader will require all the assets in commonjs.accordion
//file-loader read the assets i.e it ll actually execute the img or svgs present in js and emits the file in the specified path.

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
