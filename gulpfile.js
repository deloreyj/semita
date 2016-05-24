var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Error handler
function handleErrors(error) {
	console.error(error);
	this.emit('end');
}

//build styles
gulp.task('styles', function() {
	console.log('starting styles');
	gulp.src('public/css/styles.scss')
		.pipe(sass())
		.on('error', handleErrors)
		.pipe(prefix('last 2 versions'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('public/build/css/'));
});

//reloads styles
gulp.task('styles:reload', function() {
	console.log('running styles reload');
	gulp.src('public/css/styles.scss').pipe(livereload({auto:false}));
});

//build scripts
gulp.task('scripts', function() {
	gulp.src('public/js/**/*.js')
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/build/js'));
});

//reloads scripts
gulp.task('scripts:reload', function() {
	console.log('scripts reloaded');
	gulp.src('public/js/index.js').pipe(livereload({auto:false}));
});

//Watch task
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('public/js/**/*.js', ['scripts', 'scripts:reload']);
		
	gulp.watch('public/index.html').on('change', livereload.changed);
	
	gulp.watch('public/css/styles.scss',['styles', 'styles:reload']);
});

//default task
gulp.task('default', function() {
	gulp.start('styles','scripts');
});