var gulp = require('gulp'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    angularFileSort = require('gulp-angular-filesort'),
    browserSync = require('browser-sync').create();

var config = {
    paths: {
        src: './src',
        build: './build',
        bower: './bower_components'
    }
};

//Using Gulp Clean to clean the build directory which we create during gulp inject

gulp.task('clean', function(){
    return gulp.src(config.paths.build, {read: false})
        .pipe(clean());
});

//Using Gulp Inject to auto inject the css files, js files and bower files which is needed by app to run

gulp.task('inject', function () {


    //find all the css files, read: false to reduce time since reading the css files is not necessary
    var cssFiles = gulp.src([
        config.paths.src + '/**/*.css'
    ], {read: false});

    //find all the js files
    var jsFiles = gulp.src([
        config.paths.src + '/**/*.js'
    ]);

    //find all the files and inject them to index.html
    return gulp.src(config.paths.src + '/index.html')
        //main-bower-files used to find all the files necessary to inject from bower components, searches in ./bower_components defined in config
        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
        .pipe(inject(cssFiles, {ignorePath: 'src', addRootSlash: false}))
        //gulp-angular-filesort used to sort the files in right order while injecting, [ignorePath: 'src', addRootSlash: false] so that it starts searching from /app
        .pipe(inject(jsFiles.pipe(angularFileSort()), {ignorePath: 'src', addRootSlash: false}))
        .pipe(gulp.dest(config.paths.build));
});

// Using browser-sync to run server for testing the pages, it also provides live reload which looks for changes and reloads the server. Running by default on localhost:3000

gulp.task('serve', ['inject'], function () {
    // initiate the server
    browserSync.init({
        server: {
            baseDir: [config.paths.build, config.paths.bower, config.paths.src],
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        // looks for the changes in the files
        files: [
            config.paths.src + '/**'
        ]
    });
});