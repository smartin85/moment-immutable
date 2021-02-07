module.exports = function (config) {
    const package = require('./package.json');
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/moment/moment.js',
            'moment-immutable.js',
            'tests/unit-tests/moment-immutable.spec.js'
        ],
        exclude: [],
        reporters: ['progress', 'coverage', 'coveralls'],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-global-preprocessor',
            'karma-coverage',
            'karma-coveralls',
            'karma-eslint'
        ],
        globals: {
            packageVersion: package.version
        },
        preprocessors: {
            'tests/unit-tests/moment-immutable.spec.js': ['global', 'eslint'],
            'moment-immutable.js': ['coverage', 'eslint']
        },
        coverageReporter: {
            reporters: [
                { type: 'lcov',  dir: 'coverage/'},
                { type: 'text' }
            ]
        },
        eslint: {
            stopOnError: false,
            stopOnWarning: false,
            showWarnings: true,
            engine: {
                configFile: '.eslintrc'
            }
        },
        singleRun: false
    });
};