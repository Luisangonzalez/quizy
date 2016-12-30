const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');


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

gulp.task('watch', ['babel'], function () {
  let stream = nodemon({
                 script: 'dist/schemas/test.js'
               , watch: 'src'
               , tasks: ['lint','babel']
             });
  return stream;
});
