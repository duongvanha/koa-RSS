require('babel-core/register')({
    presets: ['es2015', 'es2017', 'stage-0'],
    plugins: [
        ['transform-runtime', {
            'polyfill'   : false,
            'regenerator': true,
        }],
        'transform-decorators-legacy',
        'transform-class-properties',
    ],
});

require('./server/app');