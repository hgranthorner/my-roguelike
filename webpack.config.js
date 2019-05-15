const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'js', 'index.js'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watchOptions: {
    aggregateTimeout: 1000
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
