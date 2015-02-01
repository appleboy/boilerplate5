'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Api Doc
gulp.task('apidoc', function(){
    $.apidoc.exec({
        src: "app/",
        dest: "docs/api/"
    });
});