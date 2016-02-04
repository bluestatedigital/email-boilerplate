var gulp = require('gulp');
var strip = require('gulp-strip-comments');
var rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp.src('boilerplate_comments.html')
    .pipe(strip({
      safe: false,
      trim: true
    }))
    .pipe(rename('boilerplate.html'))
    .pipe(gulp.dest('./'));
});
