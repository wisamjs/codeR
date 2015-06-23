var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var browserSync = require('browser-sync').create();

var paths = {
  sass: ['./scss/**/*.scss'],
  css: './.tmp/css/'
};

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/",
            routes: {
              '/bower_components': 'bower_components',
              '/.tmp': '.tmp'
            }
        }
    });
});

gulp.task('default', ['sass','browser-sync']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.stream())
    .on('end', done);
});

