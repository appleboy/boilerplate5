'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var assetsDir = 'resources/assets';

var scriptSrcDir = assetsDir + '/scripts';
var scriptSrcFiles = scriptSrcDir + '/**/*.js';
var scriptDestDir = 'public/scripts';

// Scripts
gulp.task('scripts', function() {
    return gulp.src(scriptSrcFiles)
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(scriptDestDir))
        .pipe($.size({ title: 'scripts' }));
});
