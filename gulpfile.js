var gulp = require('gulp'),
    KarmaServer = require('karma').Server,
    uglify = require('gulp-uglifyjs'),
    runSequence = require('run-sequence'),
    path = require('path');

function runKarma(singleRun, done) {
    return new KarmaServer({
        configFile: path.join(__dirname, '/karma.conf.js'),
        singleRun: singleRun
    }, done).start();
}

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    return runKarma(true, done);
});

/**
 * Run test continually
 */
gulp.task('test:dev', function (done) {
    return runKarma(false, done);
});

/**
 * Minify the source file
 */
gulp.task('minify', function (done) {
    return gulp
        .src('moment-immutable.js')
        .pipe(uglify('moment-immutable.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
    return runSequence('test', 'minify');
});