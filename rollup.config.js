export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundles/unicorn.components.umd.js',
        name: 'unicorn.components',
        format: 'umd',
        sourcemap: true,
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/forms': 'ng.forms',
            '@angular/platform-browser': 'ng.platformBrowser',
            'rxjs/Observable': 'Rx',
            'rxjs/Subject': 'Rx',
            'rxjs/Subscription': 'Rx',
            'moment': 'moment'
        }
    }
};
