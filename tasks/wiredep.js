'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var bowerDir = 'public/bower_components';

var assetsDir = 'resources/assets';
var styleSrcDir = assetsDir + '/styles';
var styleSrcMainFiles = styleSrcDir + '/*.scss';

var templateExt = '.php';
var templateDir = 'resources/templates';
var templateFiles = templateDir + '/**/*' + templateExt;
var viewDir = 'resources/views';

// Inject bower components
gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream;
    var merge = require('merge-stream');

    var styleDeps = gulp.src(styleSrcMainFiles)
        .pipe(wiredep({
            directory: bowerDir
        }))
        .pipe(gulp.dest(styleSrcDir));

    var tplDeps = gulp.src(templateFiles)
        .pipe(wiredep({
            ignorePath: '../../public',
            exclude: ['modernizr']
        }))
        .pipe(gulp.dest(viewDir));

    return merge(styleDeps, tplDeps);
});
