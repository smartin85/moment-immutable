var gulp = require('gulp');
var KarmaServer = require('karma').Server;
var uglify = require('gulp-uglifyjs');
var runSequence = require('run-sequence');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    return new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Run test continually
 */
gulp.task('test:dev', function (done) {
    return new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, done).start();
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