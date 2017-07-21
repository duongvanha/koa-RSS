const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack           = require('webpack');
const nodeExternals     = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

require('dotenv').config();
const BUILD_DIR = path.join(__dirname);
const APP_DIR   = path.join(__dirname, 'app');

const VENDOR_LIBS = [
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'redux-form',
    'react-tap-event-plugin',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'redux-logger',
    'material-ui'
    /**
     * add more name library
     */
];
const client      = {
    entry  : {
        bundle: APP_DIR + '/client/index.js',
        vendor: VENDOR_LIBS
    },
    output : {
        path      : BUILD_DIR + '/public/',
        // filename: '[name].[chunkhash].js',
        filename  : '[name].js',
        publicPath: "/",
    },
    module : {
        rules: [
            {
                use    : 'babel-loader',
                test   : /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test  : /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options: {limit: 40000}
                    },
                    // 'url-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new HtmlWebPackPlugin({
            template: APP_DIR + '/client/index.ejs',
            filename: BUILD_DIR + '/public/layout.html'
        })
    ]
};
const server      = {
    target   : 'node',
    node     : {
        __dirname: false,
    },
    externals: [nodeExternals({
        modulesFromFile: true,
    })],
    entry    : {
        js: ['babel-polyfill', APP_DIR + '/server/app.js'],
    },
    output   : {
        path         : BUILD_DIR,
        filename     : 'index.js',
        libraryTarget: 'commonjs2',
    },
    module   : {
        rules: [
            {
                use    : 'babel-loader',
                test   : /\.js$/,
                exclude: /node_modules/
            },
            {test: /\.css$/, loader: 'ignore-loader'}
        ],
    },
    plugins  : [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        })
    ]
};

module.exports = [client, server];
