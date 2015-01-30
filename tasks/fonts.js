'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Fonts
gulp.task('fonts', function () {
    return gulp.src([
            'resources/assets/fonts/*.{otf,eot,svg,ttf,woff}',
            'public/bower_components/**/fonts/**/*.{otf,eot,svg,ttf,woff}'
        ])
        .pipe($.flatten())
        .pipe(gulp.dest('public/fonts'))
        .pipe($.size({ title: 'fonts' }));
});