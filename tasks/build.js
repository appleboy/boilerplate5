'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var templateExt = '.php';
var viewDir = 'resources/views';
var styleGuideDir = 'docs/styleguide';

// Build
gulp.task('build', ['wiredep', 'styles', 'scripts', 'images', 'fonts'], function() {

    var saveLicense = require('uglify-save-license');
    var assets = $.useref.assets({ searchPath: 'public' });

    return gulp.src(viewDir + '/**/*' + templateExt)
        .pipe(assets)
        .pipe($.if('*.js', $.uglify({ preserveComments: saveLicense })))
        .pipe($.if('*.css', $.csso()))
        .pipe(gulp.dest(styleGuideDir))
        .pipe($.rev())
        .pipe(gulp.dest('public'))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace({
            replaceInExtensions: [templateExt]
        }))
        .pipe(gulp.dest(viewDir));
});
