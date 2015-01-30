'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Watch
gulp.task('watch', ['prepare'], function() {
    gulp.start('serve');
    gulp.start('livereload');
    gulp.watch(['app/templates/**/*.php', 'bower.json'], ['wiredep']);
    gulp.watch(['app/models/**/*.php', 'app/controllers/*.php'], ['phpunit']);
    gulp.watch('assets/styles/**/*.scss', ['styles']);
    gulp.watch('assets/scripts/**/*.js', ['scripts']);
    gulp.watch('assets/images/**/*', ['images']);
});
