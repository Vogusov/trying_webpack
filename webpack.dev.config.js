const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')




module.exports = {
  context: path.resolve(__dirname, 'src/public/'),
  mode: 'development',


  entry: {
    main: [
      '@babel/polyfill',
      'whatwg-fetch',
      './index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public/'),
    filename: 'js/index.js'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/public/')
    }
  },

  devServer: {
    port: 4200,
    hot: true
  },

  target: 'web',
  devtool: '#source-map',



  module: {
    rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }]
      },
    ]
  },


  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      excludeChunks: ['server']
    }),

    new MiniCssExtractPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/images/'),
          to: path.resolve(__dirname, 'dist/public/images')
        },
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),

    new CleanWebpackPlugin()
  ]
}