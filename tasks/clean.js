'use strict';

var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

// Clean
gulp.task('clean:develop', function(cb) {
    del(['resources/views', 'public/styles', 'public/scripts', '.sass-cache'], cb);
});

// Clean Cache
gulp.task('clean:cache', function (cb) {
    return $.cache.clearAll(cb);
});

// Clean
gulp.task('clean', ['clean:develop', 'clean:cache'], function(cb) {
    del(['public/css', 'public/js', 'public/fonts', 'public/images', 'docs/styleguide', 'docs/api'], cb);
});

// Clean temporary assets
gulp.task('clean:temporary', function (cb) {
    del(['resources/views/js', 'resources/views/css', 'public/scripts', 'public/styles', '.sass-cache'], cb);
});
