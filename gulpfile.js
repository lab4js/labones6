var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('es6', () => {
    return gulp.src('src/**/*.js').pipe(babel({
        presets: ['@babel/env']
    })).pipe(gulp.dest('build'));
});

gulp.task('default', () => {
    browserSync.init({
        proxy: {
            target: "localhost:8080", // can be [virtual host, sub-directory, localhost with port]
            ws: true // enables websockets
        }
    });
    gulp.watch('src/**/*.js', ['es6']);
    gulp.watch('src/**/*.js', ['reload']);
});

gulp.task('reload', ['js'], function(done) {
    browserSync.reload();
    done();
});