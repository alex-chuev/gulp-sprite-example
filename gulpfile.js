var gulp = require('gulp');
var sprite = require('gulp-sprite-generator');
var clean = require('gulp-clean-css');

gulp.task('sprite', function () {
	var spriteOutput = gulp.src('src/css/*.css')
		.pipe(sprite({
			baseUrl: '../images/',
			spriteSheetName: 'sprite.png',
			spriteSheetPath: 'dist/images'
		}));

	spriteOutput.css
		.pipe(clean())
		.pipe(gulp.dest('dist/css'));

	spriteOutput.img
		.pipe(gulp.dest('dist/image'));
});
