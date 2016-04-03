var gulp        	= require('gulp'),
	browserSync 	= require('browser-sync'),
	sass        	= require('gulp-sass'),
	autoprefixer   	= require('gulp-autoprefixer'),
	cssnano   		= require('gulp-cssnano'),
	sourcemaps   	= require('gulp-sourcemaps'),
	gutil   		= require('gulp-util'),
	childprocess	= require('child_process'),
	src = {
		scss: '_assets/scss/{,*/}*.{scss,sass}',
		javascripts: '_assets/js/{,*/}*.js'
	};

//Compile and minify Sass, generate sourceemaps, and place CSS in both root /assets/ folder and in _site/assets/ for reloading
gulp.task('sass', function () {
  gulp.src(src.scss)
  	.pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .on('error', function (err) {
    	browserSync.notify("Uh oh, there's an error!");
		gutil.log(
			err.name + ' in '+ gutil.colors.cyan(err.plugin) + ':'   +'\n'+
			gutil.colors.grey('----------------------------------')  +"\n"+
			'    File:  ' + gutil.colors.magenta(err.relativePath)   +"\n"+
			'    Line:  ' + gutil.colors.magenta(err.line)           +'\n'+
			' Message:  ' + gutil.colors.yellow(err.messageOriginal) +"\n"+
			gutil.colors.grey('----------------------------------')
		);
    })
    .pipe(autoprefixer({browsers: ['last 2 versions', 'ie 9']}))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Start BrowserSync to serve up site
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

//Serve site and watch for changes
gulp.task('serve', ['sass', 'browser-sync'], function () {
    gulp.watch(src.scss, ['sass']);
});