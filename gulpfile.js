'use strict';

var gulp = require('gulp');

gulp.task('copyfiles', function () {

  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/common-images/**')
    .pipe(gulp.dest('src/assets/ej/common-images'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/material/**')
    .pipe(gulp.dest('src/assets/ej/material'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.material.min.css')
    .pipe(gulp.dest('src/assets/ej'));
  gulp.src('node_modules/syncfusion-javascript/Content/ej/web/responsive-css/**')
    .pipe(gulp.dest('src/assets/ej/responsive-css'));

});
