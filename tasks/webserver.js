'use strict';

var gulp      = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host : '0.0.0.0',
      livereload : true,
      fallback : 'index.html'
    }))
})
