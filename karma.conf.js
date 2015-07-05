var webpack = require("webpack");
var excludeDirs=[/node_modules/,/bower_components/];

module.exports = function(config) {
  config.set({

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/core/local-storage-service.test.js'
    ],

    frameworks: ['sinon', 'chai', 'mocha'],

    preprocessors: {
      'src/**/*.test.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      module: {
        loaders: [
          {test: /\.js$/, loader: 'babel-loader', exclude: excludeDirs},
          {test: /\.css$/, loader: "style!css"},
          {test: /\.less$/, loader: "style!css!less"}
        ],
        postLoaders: [{
          test: /\.js/,
          exclude: /(test|node_modules|bower_components)/,
          loader: 'istanbul-instrumenter'
        }]
      },
      resolve: {
        modulesDirectories: [
          "",
          "src",
          "node_modules"
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("karma-chai"),
      require('karma-sinon'),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['PhantomJS']
  });
};