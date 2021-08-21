JavaScript;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const path = require("path");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const path = require("path");
module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
