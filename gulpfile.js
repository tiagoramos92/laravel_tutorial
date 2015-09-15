//var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
/*
elixir(function(mix) {
    mix.sass('app.scss');
});
*/

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var prefix =  require('gulp-autoprefixer');
var recess = require('gulp-recess');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
    gulp.src('./resources/assets/main.less')
        .pipe(less())
        .pipe(prefix())
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
    gulp.src('./resources/assets/bootstrap/less/variables.less')
        .pipe(less())
        .pipe(prefix())
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./Site/less/**/*.less', ['less']);
});

// Default Task
gulp.task('default', ['less', 'watch']);


//-----------
//-----------
//-----------
//-----------


