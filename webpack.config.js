var excludeDirs=[/node_modules/,/bower_components/];
var path = require('path');
module.exports = {
  entry: ['./src/app.js'],
  output: {
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
    {test: /\.js$/, loader: 'babel-loader', exclude: excludeDirs},
    {test: /\.html$/, loader: 'raw'},
    {test: /\.css$/, loader: 'style!css'},
    {test: /\.scss$/, loader: 'style!css!sass'},
    { test: /\.woff($|\?)/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
    { test: /\.woff2($|\?)/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
    { test: /\.ttf($|\?)/,    loader: "file-loader?prefix=font/" },
    { test: /\.eot($|\?)/,    loader: "file-loader?prefix=font/" },
    { test: /\.svg($|\?)/,    loader: "file-loader?prefix=font/" },
        ]
  }

};