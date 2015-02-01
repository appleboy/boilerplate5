'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var bowerDir = 'public/bower_components';
var assetsDir = 'resources/assets';
var fontSrcDir = assetsDir + '/fonts';
var fontBuildDir = 'public/fonts';

// Fonts
gulp.task('fonts', function () {
    return gulp.src([
            fontSrcDir + '/*.{otf,eot,svg,ttf,woff}',
            bowerDir + '/**/fonts/**/*.{otf,eot,svg,ttf,woff}'
        ])
        .pipe($.flatten())
        .pipe(gulp.dest(fontBuildDir))
        .pipe($.size({ title: 'fonts' }));
});
