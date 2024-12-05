/** @type {import('webpack').Configuration} */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  name: 'read-input',
  entry: path.resolve('index.ts'),
  target: 'node',
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve('dist'),
    filename: '[name].cjs',
    library: {
      type: 'commonjs'
    }
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
