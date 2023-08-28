const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/dist"),
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts", '.css'],
    modules: [__dirname, "src", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use:
        [
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
