'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const gulpsync = require('gulp-sync')(gulp);
const execSync = require('child_process').execSync;

let rmFolder = (dirName) => {
  execSync('rm -rf ' + dirName, (error) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
};


gulp.task('lint', () => {
  let src = gulp.src(['src/**/*.js','gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
  return src;
});

gulp.task('babel', () => {
  let stream = gulp.src('src/**/*.js')
                   .pipe(babel())
                   .pipe(gulp.dest('dist'));
  return stream;
});

gulp.task('deleteDirs', () => {
  rmFolder('dist');
});

gulp.task('serverNodemon', () => {
  let stream = nodemon({
                 script: 'dist/server.js'
             });
  return stream;
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['server']);

});

gulp.task('server', gulpsync.sync(['compile','serverNodemon']));

gulp.task('compile', gulpsync.sync(['deleteDirs', 'lint', 'babel']));
