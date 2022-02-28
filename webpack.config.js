const path = require("path");

module.exports = {
  entry: "./react/index.jsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "react-webpack"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'react'),
        exclude: /node_modules/,
        use: ["babel-loader"]
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ],
  },
};