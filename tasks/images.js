'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Images
gulp.task('images', function() {
    return gulp.src('resources/assets/images/**/*')
        .pipe($.plumber())
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('public/images'))
        .pipe($.size({ title: 'images' }));
});