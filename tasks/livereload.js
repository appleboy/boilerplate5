'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var viewDir = 'resources/views';
var publicDir = 'public';
var bowerDir = 'public/bower_components';

// Start Livereload server
gulp.task('livereload', function () {
    var server = $.livereload;
    server.listen();
    gulp.watch([
        viewDir + '/**/*',
        publicDir + '/**/*',
        '!' + bowerDir + '/**/*',
    ]).on('change', server.changed);
});
