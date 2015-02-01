'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var assetsDir = 'resources/assets';
var imageSrcDir = assetsDir + '/images';
var imageBuildDir = 'public/images';

// Images
gulp.task('images', function() {
    return gulp.src(imageSrcDir + '/**/*')
        .pipe($.plumber())
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(imageBuildDir))
        .pipe($.size({ title: 'images' }));
});
