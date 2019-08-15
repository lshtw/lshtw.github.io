'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    clean = require('gulp-clean'),
    concat = require('gulp-concat');

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/styles/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        semantic: 'build/semantic',
        docs: 'build/docs'
    },
    src: {
        html: 'src/*.html',
        js: 'src/scripts/*.js',
        style: 'src/styles/style.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        semantic: 'semantic/**',
        docs: 'src/docs/**'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/scripts/**/*.js',
        style: 'src/styles/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000
};

gulp.task('html-build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js-build', function () {
    return gulp.src(path.src.js) //Найдем наш main файл
    // .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('style-build', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image-build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts-build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
gulp.task('move', function () {
    gulp.src(path.src.semantic).pipe(gulp.dest(path.build.semantic));
    gulp.src(path.src.docs).pipe(gulp.dest(path.build.docs));
});

gulp.task('build', [
    'html-build',
    'js-build',
    'style-build',
    'image-build',
    'fonts-build',
    'move'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html-build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style-build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js-build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image-build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts-build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

gulp.task('default',['build', 'webserver', 'watch']);