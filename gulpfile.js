const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


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

gulp.task('default', function() {
    return console.log('Gulp is running');
});