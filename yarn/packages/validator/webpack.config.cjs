const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'validator',
  entry: path.resolve('index.ts'),
  target: 'node',
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
