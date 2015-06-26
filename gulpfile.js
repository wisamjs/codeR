
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var webpack = require('gulp-webpack');



var paths = {
  app: ['src/**/*.js'],
  sass: ['./scss/**/*.scss'],
  css: './.tmp/css/',
  html: ['src/**/*.html']
};


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

gulp.task('dev', ['build', 'browser-sync','watch']);

gulp.task('build',function() {
  return gulp
    .src('client/app/app.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest('.tmp'));

});


gulp.task('watch', function() {
  gulp.watch([paths.app, paths.sass, paths.html], ['build', browserSync.reload]);

});
