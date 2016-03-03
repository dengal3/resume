var gulp = require("gulp"),
    data = require("gulp-data"),
    jade = require("gulp-jade"),
    less = require("gulp-less"),
    clean = require("gulp-clean"),
    ghPages = require("gulp-gh-pages");

var path = require("path");

gulp.task("templates", function() {
    return gulp.src('./src/templates/index.jade')
        .pipe(data( function(file) {
            return require('./src/resume.json');
        }))
        .pipe(jade())
        .pipe(gulp.dest("./dist/"));
});

gulp.task("less", function() {
    return gulp.src("./src/less/index.less")
        .pipe(less({
            paths: [path.join(__dirname, "less")]
        }))
        .pipe(gulp.dest("./dist/"));
})

gulp.task("static", function() {
    return gulp.src("./assets/*")
        .pipe(gulp.dest("./dist/assets"));
})

gulp.task("deploy", function() {
    return gulp.src("./dist/**/*")
    .pipe(ghPages());
})

gulp.task("clean", function() {
    return gulp.src("./dist")
        .pipe(clean());
})

gulp.task("run", ["templates", "less", "static"]);

gulp.task("default", ["run"]);