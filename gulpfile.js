var gulp = require('gulp');


//  压缩css   gulp-cssnano
var cssnano = require('gulp-cssnano');
gulp.task('cssnano',function(){
	return gulp.src('src/css/*.css')
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));

});

//  gulp-jsmin  JS代码压缩
var jsmin = require('gulp-jsmin');
gulp.task('jsmin',function(){
	gulp.src('src/js/*.js')
	.pipe(jsmin())
	.pipe(gulp.dest('dist/js'));

	    browserSync.reload();

});



//压缩html代码   gulp-htmlmin
var htmlmin = require('gulp-htmlmin');
gulp.task('htmlmin',function(){
	gulp.src('src/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));


    browserSync.reload();


});

//监听某个文件的变化
gulp.task('watch',function(){
	gulp.watch('src/index.html',['htmlmin']);
	gulp.watch('src/css/*.css',['cssnano']);
	gulp.watch('src/js/*.js',['jsmin']);
});

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    	gulp.watch('src/index.html',['htmlmin']);
	gulp.watch('src/css/*.css',['cssnano']);
	gulp.watch('src/js/*.js',['jsmin']);
});