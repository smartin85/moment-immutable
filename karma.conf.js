var package = require('./package.json');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/moment/moment.js',
            'moment-immutable.js',
            'tests/moment-immutable.spec.js'
        ],
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-global-preprocessor'
        ],
        globals: {
            packageVersion: package.version
        },
        preprocessors: {
            'tests/moment-immutable.spec.js': ['global']
        },
        singleRun: false
    });
};