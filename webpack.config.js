const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { ModuleFilenameHelpers } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpeg|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src", to: "dist" },
      ],
    }),
  ],
}
