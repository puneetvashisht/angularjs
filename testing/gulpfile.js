var gulp = require('gulp');
var concat = require('gulp-concat')

gulp.task('task1', function(){
    console.log('task1');
})

gulp.task('copyjs', function(){
    gulp.src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist'))
})