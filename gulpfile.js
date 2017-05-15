var gulp = require('gulp');
var ts = require('gulp-typescript');
var path =  'codebase/**/*.ts';
gulp.task('default', function () {
    return gulp.src('codebase/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'lifedb.js'
        }))
        .pipe(gulp.dest('output'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch(path, ['default']);
});