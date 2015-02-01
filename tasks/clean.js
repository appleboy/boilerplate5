'use strict';

var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();

var viewDir = 'resources/views';

var scriptDestDir = 'public/scripts';
var styleDestDir = 'public/styles';
var styleCacheDir = '.sass-cache';

var scriptBuildDir = 'public/js';
var styleBuildDir = 'public/css';
var imageBuildDir = 'public/images';
var fontBuildDir = 'public/fonts';

var styleGuideDir = 'docs/styleguide';
var apiDocDir = 'docs/api';

// Clean
gulp.task('clean:develop', function(cb) {
    del([viewDir, scriptDestDir, styleDestDir, styleCacheDir], cb);
});

// Clean Cache
gulp.task('clean:cache', function (cb) {
    return $.cache.clearAll(cb);
});

// Clean
gulp.task('clean', ['clean:develop', 'clean:cache'], function(cb) {
    del([scriptBuildDir, styleBuildDir, imageBuildDir, fontBuildDir, styleGuideDir, apiDocDir], cb);
});

// Clean temporary assets
gulp.task('clean:temporary', function (cb) {
    del([viewDir + '/js', viewDir + '/css', scriptDestDir, styleDestDir, styleCacheDir], cb);
});
