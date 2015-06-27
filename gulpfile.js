
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var webpack = require('gulp-webpack');



var paths = {
  app: ['src/**/*.js',"!src/bundle.js*"],
  sass: ['./scss/**/*.scss','src/**/*.scss'],
  css: './.tmp/css/',
  html: ['src/**/*.html']
};


gulp.task('browser-sync', function() {
    browserSync.init({
      port: 4000,
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
    .pipe(gulp.dest('src'));

});


gulp.task('watch', function() {
  gulp.watch([paths.app, paths.sass, paths.html], ['build', browserSync.reload]);

});
