'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var templateDir = 'resources/templates';
var templateFiles = templateDir + '/**/*.blade.php';

var appFiles = 'app/**/*.php';

var assetsDir = 'resources/assets';

var scriptSrcDir = assetsDir + '/scripts';
var scriptSrcFiles = scriptSrcDir + '/**/*.js';

var styleSrcDir = assetsDir + '/styles';
var styleSrcFiles = styleSrcDir + '/**/*.scss';

var imageSrcDir = assetsDir + '/images';

// Watch
gulp.task('watch', ['prepare'], function() {
    gulp.start('serve');
    gulp.start('livereload');
    gulp.watch([templateFiles, 'bower.json'], ['wiredep']);
    gulp.watch(appFiles, ['phpunit']);
    gulp.watch(scriptSrcFiles, ['scripts']);
    gulp.watch(styleSrcFiles, ['styles']);
    gulp.watch(imageSrcDir + '/**/*', ['images']);
});
