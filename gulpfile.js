// ===========================================================================
// Setup
// ===========================================================================


// Project Variables
// ---------------------------------------------------------------------------

var project     = 'forward';
var build       = 'build/';
var dist        = 'dist/'+project+'/';
var source      = 'src/';
var lang        = 'languages/';
var bower       = 'bower_components/';
var url         = 'forward.local';


// Plugins
// ---------------------------------------------------------------------------

var gulp        = require('gulp');
var del         = require('del');
var plugins     = require('gulp-load-plugins')({ camelize: true }); // This loads all modules prefixed with "gulp-" to plugins.moduleName
var browserSync = require('browser-sync').create();


// PostCSS Processors
// ---------------------------------------------------------------------------

var postcss         = require('gulp-postcss');
var perfectionist   = require('perfectionist');
var autoprefixer    = require('autoprefixer');
var cssnano         = require('cssnano');
var combinemq       = require("css-mqpacker");


// ===========================================================================
// Styles
// ===========================================================================

// Main Styles
// ---------------------------------------------------------------------------

gulp.task('styles', function() {
  gulp.src(source + 'scss/style.scss')
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass({
    sourcemap: true,
    includePaths: [bower]
  }).on('error', plugins.sass.logError))
  .pipe(postcss([autoprefixer, combinemq({
    sort: true
  }), cssnano, perfectionist({
      format: 'compact'
  })]))
  .pipe(plugins.sourcemaps.write('.'))
  .pipe(gulp.dest(build))
  .pipe(browserSync.stream({match: '**/*.css'}));
});


// ===========================================================================
// Scripts
// ===========================================================================

// Scripts; broken out into different tasks to create specific bundles which are then compressed in place
//
gulp.task('scripts', ['scripts-lint', 'scripts-core', 'scripts-extras'], function(){
  return gulp.src([build+'js/**/*.js', '!'+build+'js/**/*.min.js']) // Avoid recursive min.min.min.js
  .pipe(plugins.rename({suffix: '.min'}))
  .pipe(plugins.uglify())
  .pipe(gulp.dest(build+'js/'));
});

// Lint scripts for errors and sub-optimal formatting
//
gulp.task('scripts-lint', function() {
  return gulp.src(source+'js/**/*.js')
  .pipe(plugins.jshint('.jshintrc'))
  .pipe(plugins.jshint.reporter('default'));
});

// These are the core custom scripts loaded on every page; pass an array to bundle several scripts in order
//
gulp.task('scripts-core', function() {
  return gulp.src([
    source+'js/core.js'
    //, source+'js/navigation.js' // An example of how to add files to a bundle
  ])
  .pipe(plugins.concat('core.js'))
  .pipe(gulp.dest(build+'js/'));
});

// An example task for extra scripts that aren't loaded on every page
//
gulp.task('scripts-extras', function() {
  return gulp.src([
    // You can also add dependencies from Bower components e.g.: bower+'dependency/dependency.js',
    source+'js/extras.js'
  ])
  .pipe(plugins.concat('extras.js'))
  .pipe(gulp.dest(build+'js/'));
});


// ===========================================================================
// Images
// ===========================================================================

// Copy images; minification occurs during packaging
//
gulp.task('images', function() {
  return gulp.src(source+'**/*(*.png|*.jpg|*.jpeg|*.gif)')
  .pipe(gulp.dest(build));
});


// ===========================================================================
// Languages
// ===========================================================================

// Copy everything under `src/languages` indiscriminately
//
gulp.task('languages', function() {
  return gulp.src(source+lang+'**/*')
  .pipe(gulp.dest(build+lang));
});


// ===========================================================================
// PHP
// ===========================================================================

// Copy PHP source files to the build directory
//
gulp.task('php', function() {
  return gulp.src(source+'**/*.php')
  .pipe(gulp.dest(build));
});


// ===========================================================================
// Distribution
// ===========================================================================

// Prepare a distribution, the properly minified, uglified, and sanitized version of the theme ready for installation
//

// Clean out junk files after build
//
gulp.task('clean', ['build'], function(cb) {
  del([build+'**/.DS_Store'], cb)
});

// Totally wipe the contents of the distribution folder after doing a clean build
//
gulp.task('dist-wipe', ['clean'], function(cb) {
  del([dist], cb)
});

// Copy everything in the build folder (except previously minified stylesheets) to the `dist/project` folder
//
gulp.task('dist-copy', ['dist-wipe'], function() {
  return gulp.src([build+'**/*', '!'+build+'**/*.min.css'])
  .pipe(gulp.dest(dist));
});

// Minify stylesheets in place
//
gulp.task('dist-styles', ['dist-copy'], function() {
  return gulp.src([dist+'**/*.css', '!'+dist+'**/*.min.css'])
  .pipe(postcss([cssnano]))
  .pipe(gulp.dest(dist));
});

// Optimize images in place
//
// Use the line below if you wish to compress the styles to a single line.
// gulp.task('dist-images', ['dist-styles'], function() {
gulp.task('dist-images', ['dist-copy'], function() {
  return gulp.src([dist+'**/*.png', dist+'**/*.jpg', dist+'**/*.jpeg', dist+'**/*.gif', '!'+dist+'screenshot.png'])
  .pipe(plugins.imagemin({
    optimizationLevel: 7
  , progressive: true
  , interlaced: true
  }))
  .pipe(gulp.dest(dist));
});


// ===========================================================================
// Bower
// ===========================================================================

// Executed on `bower update` which is in turn triggered by `npm update`; use this to manually copy front-end dependencies into your working source folder
//
gulp.task('bower', ['bower-normalize']);

// Used to get around Sass's inability to properly @import vanilla CSS
//
gulp.task('bower-normalize', function() {
  return gulp.src(bower+'normalize.css/normalize.css')
  .pipe(plugins.rename('_normalize.scss'))
  .pipe(gulp.dest(source+'scss/base'));
});


// ===========================================================================
// Tasks
// ===========================================================================

// Build styles and scripts; copy PHP files
//
gulp.task('build', ['styles', 'scripts', 'images', 'languages', 'php']);

// Release creates a clean distribution package under `dist` after running build, clean, and wipe in sequence
//
gulp.task('dist', ['dist-images']);

// Watch Task
//
gulp.task('watch', ['styles'], function(gulpCallback) {
  browserSync.init({
    proxy: url
  }, function callback() {
  gulp.watch(source+'scss/**/*.scss', ['styles']);
  gulp.watch([source+'js/**/*.js', bower+'**/*.js'], ['scripts']);
  gulp.watch(source+'**/*(*.png|*.jpg|*.jpeg|*.gif)', ['images']);
  gulp.watch(source+'**/*.php', ['php']);
    gulpCallback();
  });
});

// Default Task (Watch)
//
gulp.task('default', ['watch']);
