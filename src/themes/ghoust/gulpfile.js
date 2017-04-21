var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');

var paths = {
  sass: ['./src/sass/**/*.scss'],
  js: ['./src/js/**/*.js']
}

gulp.task('sass', function () {
  return gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('js', function() {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('./static/js'))
});

gulp.task('build', ['sass', 'js']);

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});
