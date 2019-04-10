const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');


gulp.task('message', function() {
    return console.log('Gulp is running');
});

gulp.task('copyHtml', () => {
    gulp.src('./*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('imageMin', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'))
});

gulp.task('minify-css', () => {
    gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('default', function() {
    return console.log('Gulp is running');
});