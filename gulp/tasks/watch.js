const gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './app'
        }
    });
    // gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    gulp.watch('./app/index.html').on('change',browserSync.reload);
    gulp.watch('./app/assets/scripts/**/*.js', function () {
        gulp.start('scriptsRefresh');
    })
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});
