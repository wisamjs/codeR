var excludeDirs=[/node_modules/,/bower_components/];
module.exports = {
  entry: ['./src/app.js'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
    {test: /\.js$/, loader: 'babel-loader', exclude: excludeDirs}
    ]
  }

};