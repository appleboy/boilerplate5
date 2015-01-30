'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence('clean', 'build', 'hologram', 'clean:temporary', cb);
});
