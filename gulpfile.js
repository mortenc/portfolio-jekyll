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
		js: '_assets/js/{,*/}*.js'
	};

/**
 * Compile and minify sass files + generate generate sourceemaps + place compiled css in both '/assets/' and '_site/assets/' for reloading
 */
gulp.task('sass', function () {
  gulp.src(src.scss)
  	.pipe(sourcemaps.init())
    .pipe(sass())
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

/**
 * Start a BrowserSync server
 */
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Build Jekyll Site with an incremental build
 */
gulp.task('jekyll', function (done) {
    browserSync.notify('Building Jekyll site...');
    return childprocess.spawn('jekyll', ['build', '--incremental'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Serve site, watch for changes and run tasks as needed
 */
gulp.task('serve', ['sass', 'jekyll', 'browser-sync'], function () {
    gulp.watch(src.scss, ['sass']);
    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '*.md', '_posts/*', '_projects/*'], ['jekyll']);
	gulp.watch(['_site/**/*.html']).on('change', browserSync.reload);
});