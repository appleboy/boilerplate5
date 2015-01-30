'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Start Livereload server
gulp.task('livereload', function () {
    var server = $.livereload;
    server.listen();
    gulp.watch([
        'resources/views/**/*',
        'public/**/*',
        '!public/bower_components/**/*',
    ]).on('change', server.changed);
});