const path = require('path');

module.exports = {
  entry: './src/index.jsx',

  mode: 'development',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  watch: true,
  watchOptions: {
      ignored: [/node_modules/, /.*\.spec\.(js|jsx)/],
      poll: 2000
  }
}