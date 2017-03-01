/**
 * Created by Roman Rahman on 12.04.2016.
 */
var gulp = require('gulp');

var path = require('path');

var twig = require('gulp-twig');
var sass = require('gulp-sass');
var inlinesource = require('gulp-inline-source');
var del = require('del');

var data = require('./src/data.json');

gulp.task('default', ['html'], function (cb) {
    del(['public/*.css'], cb);
});

gulp.task('css', function() {
    return gulp.src('src/style/index.scss')
        .pipe(sass({
            //compress: true
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('html', ['css'], function() {
    return gulp.src('src/*.twig')
        .pipe(twig({
            data: data
        }))
        .pipe(inlinesource({
            compress: true,
            rootpath: path.resolve('public')
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.twig', 'src/*.json', 'src/style/*.scss'], ['default']);
});
