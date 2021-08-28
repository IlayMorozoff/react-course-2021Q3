const { join } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const config = require('./webpack.common').createConfig({
  target: 'client'
});

module.exports = {
  ...config,

  output: {
    ...config.output,
    publicPath: '/'
},

  module: {
    ...config.module,

    rules: [
        ...config.module.rules,

        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ],
        },
        {
          test: /\.(?:ico|png|jpe?g|gif|svg)$/i,
          type: 'asset',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset',
        },
    ],
  },

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'main.css',
      // filename: '[hash:16].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public' , to: 'public'},
      ],
    }),
    
  ],
};