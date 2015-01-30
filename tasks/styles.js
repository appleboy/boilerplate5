'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs');

// Styles
gulp.task('styles', function() {
    return gulp.src('resources/assets/styles/*.scss')
        .pipe($.plumber())
        .pipe($.rubySass({
            container: (+new Date) + '', // bug of temporary path generating.
            bundleExec: fs.existsSync('.bundle'),
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/styles'))
        .pipe($.size({ title: 'styles' }));
});
