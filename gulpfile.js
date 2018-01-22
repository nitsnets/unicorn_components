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
const demo = './demo/dist';
const bundles = `${dist}/bundles`;
const styles = `${dist}/styles`;

/**
 * Main tasks
 */

gulp.task('build', sequence('clean', 'prepare-build', 'compile', 'clean-temp', 'styles', 'bundle', 'minify'));
gulp.task('deploy', sequence('build', 'prepare-deploy', 'publish'));
gulp.task('demo', ['prepare-demo', 'copy-demo'], () => {
    gulp.watch('./src/**/*.demo.ts', ['copy-demo'])
    gulp.watch(['./src/**/*.html', './src/**/*.ts', '!./**/*.spec.ts', '!./**/*.demo.ts'], ['prepare-demo'])
});

/**
 * Aux tasks
 */

gulp.task('clean', cb => remove(dist, cb));
gulp.task('clean-temp', cb => remove(temp, cb));
gulp.task('clean-demo', cb => remove(demo, cb));
gulp.task('prepare-build', () => gulp.src(['./index.ts', './src/**/*.ts', '!./**/*.spec.ts', '!./**/*.demo.ts'], {
        base: './'
    })
    .pipe(inlineCmp())
    .pipe(prepareImports())
    .pipe(gulp.dest(temp))
);
gulp.task('compile', cb => compile(cb));
gulp.task('bundle', cb => bundle(cb));
gulp.task('minify', () => gulp.src(`${bundles}/unicorn.components.umd.js`)
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(bundles))
);
gulp.task('styles', () => gulp.src('src/styles/**/*.scss').pipe(gulp.dest(styles)));
gulp.task('prepare-deploy', () => gulp.src('./package.dist.json')
    .pipe(versioner({
        version
    }))
    .pipe(rename('package.json'))
    .pipe(gulp.dest(dist))
);
gulp.task('publish', cb => publish(cb));
gulp.task('prepare-demo', () => gulp.src(['./src/**/*.ts', '!./**/*.spec.ts', '!./**/*.demo.ts'])
    .pipe(inlineCmp())
    .pipe(gulp.dest(demo))
);
gulp.task('copy-demo', () => gulp.src('src/**/*.demo.ts').pipe(gulp.dest(demo)));
gulp.task('storybook', () => cb => storybook(cb));
/**
 * Aux functions
 */
const inlineCmp = () => inlineTemplates({
    base: '/',
    target: 'es6',
    useRelativePaths: true,
    styleProcessor: compileSass
});
const compileSass = (path, ext, file, cb) => {
    let compiledCss = sass.renderSync({
        file: path,
        outputStyle: 'compressed'
    });
    cb(null, compiledCss.css);
};
const prepareImports = () => replace('import * as moment from', 'import moment from');
const compile = cb => exec('./node_modules/.bin/ngc -p tsconfig.dist.json', err => cb(err));
const bundle = cb => exec('./node_modules/.bin/rollup -c', err => cb(err));
const publish = cb => exec('npm publish', {
    cwd: dist
}, err => cb(err));
const storybook = cb => exec('./node_modules/.bin/start-storybook -p 6006', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    console.log(err);
    cb(err);
});
