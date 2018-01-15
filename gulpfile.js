const gulp = require('gulp');
const remove = require('rimraf');
const sass = require('node-sass');
const replace = require('gulp-replace');
const sequence = require('gulp-sequence');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const versioner = require('gulp-bump');
const inlineTemplates = require('gulp-inline-ng2-template');
const exec = require('child_process').exec;
const version = require('./package.json').version;

const temp = './tmp';
const dist = './dist';
const bundles = `${dist}/bundles`;
const styles = `${dist}/styles`;

/**
 * Main tasks
 */

gulp.task('build', sequence('clean', 'prepare-build', 'compile', 'clean-temp', 'styles', 'bundle', 'minify'));
gulp.task('deploy', sequence('build', 'prepare-deploy', 'publish'));

/**
 * Aux tasks
 */

gulp.task('clean', cb => remove(dist, cb));
gulp.task('clean-temp', cb => remove(temp, cb));
gulp.task('prepare-build', () => getSrcTs()
    .pipe(inlineCmp())
    .pipe(prepareImports())
    .pipe(gulp.dest(temp))
);
gulp.task('compile', cb => compile(cb));
gulp.task('bundle', cb => bundle(cb));
gulp.task('minify', () => gulp.src(`${bundles}/unicorn.components.umd.js`)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(bundles))
);
gulp.task('styles', () => gulp.src('src/styles/**/*.scss').pipe(gulp.dest(styles)));
gulp.task('prepare-deploy', () => gulp.src('./package.dist.json')
    .pipe(versioner({ version }))
    .pipe(rename('package.json'))
    .pipe(gulp.dest(dist))
);
gulp.task('publish', cb => publish(cb));
/**
 * Aux functions
 */
const getSrcTs = () => gulp.src(['./index.ts', './src/**/*.ts', '!./**/*.spec.ts'], { base: './' });
const inlineCmp = () => inlineTemplates({
    base: '/',
    target: 'es6',
    useRelativePaths: true,
    styleProcessor: compileSass
});
const compileSass = (path, ext, file, cb) => {
    let compiledCss = sass.renderSync({ file: path, outputStyle: 'compressed' });
    cb(null, compiledCss.css);
};
const prepareImports = () => replace('import * as moment from', 'import moment from');
const compile = cb => exec('./node_modules/.bin/ngc -p tsconfig.app.json', err => cb(err));
const bundle = cb => exec('./node_modules/.bin/rollup -c', err => cb(err));
const publish = cb => exec('npm publish', { cwd: dist }, err => cb(err));
