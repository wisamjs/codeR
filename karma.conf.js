var webpack = require("webpack");
var excludeDirs=[/node_modules/,/bower_components/];

module.exports = function(config) {
  config.set({

    files: [
      // all files ending in "test"
      'src/components/candidate/candidate-service.test.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['chai', 'mocha'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'src/components/candidate/candidate-service.test.js': ['webpack']
    },

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    webpack: {
      // webpack configuration
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
      // webpack-dev-middleware configuration
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("karma-chai"),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-coverage"),
      require("karma-phantomjs-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['PhantomJS']
  });
};