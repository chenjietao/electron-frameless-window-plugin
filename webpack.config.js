const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'lib/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: ['electron'],
  resolve: {
    extensions: ['.js']
  },
  target: 'node',
  mode: 'production'
}
