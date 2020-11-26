const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')





module.exports = {
  context: path.resolve(__dirname, 'src/server/'),
  mode: 'development',


  entry: {
    cart: [
      '@babel/polyfill',
      './cart.js'
    ],
    cartRouter: [
      '@babel/polyfill',
      './cartRouter.js'
    ],
    handler: [
      '@babel/polyfill',
      './handler.js'
    ],
    logger: [
      '@babel/polyfill',
      './logger.js'
    ],
    server: [
      '@babel/polyfill',
      './server.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/server/'),
    filename: '[name].js'
  },

  target: 'node',
  externals: [nodeExternals()], // for express

  devServer: {
    port: 1000,
    hot: true
  },


  module: {
    rules: [{
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

    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/server/db/'),
        to: path.resolve(__dirname, 'dist/server/db/')
      }]
    }),

    new CleanWebpackPlugin()
  ]
}