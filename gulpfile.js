var gulp = require('gulp');
var sprite = require('gulp-sprite-generator');
var clean = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sprite', function () {
    var output = gulp.src('src/css/*.css')
        .pipe(sprite({
            baseUrl: '../images',
            spriteSheetPath: '../images',
            spriteSheetName: 'sprite.png',
            algorithm: 'binary-tree'
        }));

    output.css
        .pipe(gulp.dest('dist/css'))
        .pipe(clean())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'))
    ;

    output.img
        .pipe(gulp.dest('dist/images'));
});
