const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const execSync = require('child_process').execSync;

let rmFolder = (dirName) => {
  execSync('rm -rf '+dirName, (error) => {
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

gulp.task('nodemon', () => {
  let stream = nodemon({
                 script: 'dist/models/test.js'
               , watch: 'src'
             });
  return stream;
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['lint','deleteDirs','babel','nodemon']);

});

gulp.task('compile', ['lint','deleteDirs','babel']);
