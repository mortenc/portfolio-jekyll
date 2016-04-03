var gulp        	= require('gulp'),
	browserSync 	= require('browser-sync'),
	sass        	= require('gulp-sass'),
	autoprefixer   	= require('gulp-autoprefixer'),
	childprocess	= require('child_process'),
	src = {
		scss: '_assets/scss/{,*/}*.{scss,sass}',
		javascripts: '_assets/js/{,*/}*.js'
	};

//Compile sass and place in both root /assets/ folder and in _site/assets/ for reloading
gulp.task('sass', function () {
  gulp.src(src.scss)
    .pipe(sass({
      errLogToConsole: true,
      onError: browserSync.notify
    }))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Start BrowserSync and serve up site
gulp.task('serve', ['sass'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});