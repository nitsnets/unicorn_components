const gulp = require('gulp');
const sass = require('node-sass');
const inlineTemplates = require('gulp-inline-ng2-template');
const exec = require('child_process').exec;

/**
 * Inline external HTML and SCSS into Angular component files.
 * @see https://github.com/ludohenin/gulp-inline-ng2-template
 */
gulp.task('inline', () => {
    return gulp.src(['./*.ts', './src/**/*.ts', '!./**/*.spec.ts'], { base: './' })
        .pipe(inlineTemplates({
            base: '/',
            target: 'es6',
            useRelativePaths: true,
            styleProcessor: (path, ext, file, callback) => {
                let compiledCss = sass.renderSync({
                    file: path,
                    outputStyle: 'compressed',
                });
                callback(null, compiledCss.css);
            }
        }))
        .pipe(gulp.dest('./tmp/'));
});