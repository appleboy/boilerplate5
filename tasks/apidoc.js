'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var appDir = 'app';
var apiDocDir = 'docs/api';

// Api Doc
gulp.task('apidoc', function(){
    $.apidoc.exec({
        src: appDir + '/',
        dest: apiDocDir
    });
});
