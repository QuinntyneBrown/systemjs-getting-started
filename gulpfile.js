var gulp = require('gulp');
var karma = require('gulp-karma');

var paths = {
    npm: './node_modules/',
    lib: './wwwroot/lib/'
};

var libs = [
    paths.npm + 'angular/angular.js',
    paths.npm + 'angular-route/angular-route.js',
    paths.npm + 'jquery/dist/jquery.js',
    paths.npm + 'systemjs/dist/system.js',
    paths.npm + 'systemjs/dist/system-polyfills.js',
    paths.npm + 'es6-shim/es6-shim.js',
    paths.npm + 'ng-x/dist/ngX.js'
];

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.js'
    ], ['run-unit-tests']);
});

gulp.task('run-unit-tests', function () {
    return gulp.src([
        './wwwroot/lib/jquery.js',
        './wwwroot/lib/angular.js',
        './wwwroot/lib/angular-route.js',
        './wwwroot/app/**/*.js'
        ])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        });
});

gulp.task('default', ['run-unit-tests', 'watch']);