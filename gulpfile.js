const gulp = require('gulp');
const html = require('gulp-htmlmin');
const js = require('gulp-uglify');
const css = require('gulp-cssmin');
const babel = require('gulp-babel');
gulp.task('jsmin', () => {
    return gulp.src('js/*').
    pipe(js()).
    pipe(gulp.dest('dist/js'));
});
gulp.task('toes5', () => {
    return gulp.src('js/*').pipe(babel()).pipe(js()).pipe(gulp.dest('dist/js'));
});
gulp.task('cssmin', () => {
    return gulp.src('css/*.css').
    pipe(css()).
    pipe(gulp.dest('dist/css'));
});
gulp.task('htmlmin', () => {
    return gulp.src('*.html').
    pipe(html({ collapseWhitespace: true })).
    pipe(gulp.dest('dist/html'));
});