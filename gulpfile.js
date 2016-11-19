var gulp = require('gulp'),
uglify = require('gulp-uglify'),
jshint = require('gulp-jshint');

gulp.task('default',function(){
	gulp.src('src/app.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
});