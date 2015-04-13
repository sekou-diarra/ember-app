var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var path = {
  script: ['gulpfile.js',
    './app/**/*.js',
    './test/**/*.js',
    'config/*.js',
    'Brocfile.js'
  ]
};

gulp.task('watch', function () {
  gulp.src(path.script)
    .pipe(watch(path.script))
    .pipe(plumber());
});
