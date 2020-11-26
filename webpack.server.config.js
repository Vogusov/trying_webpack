const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')





module.exports = {
  context: path.resolve(__dirname, 'src/server/'),
  mode: 'development',


  entry: {
    main: [
            '@babel/polyfill',
            './server.js'
          ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/server/'),
    filename: 'server.js'
  },

  target: 'node',
  externals: [ nodeExternals() ],  // for express

  devServer: {
    port: 9000,
    hot: true
  },


  module: {
    rules: [
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
    
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/server/db/'),
        to: path.resolve(__dirname, 'dist/server/db/')
      }]
    }),

    new CleanWebpackPlugin()
  ]
}

