const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

const VENDOR_LIBS = [
    'react',
    'react-dom',
    'react-redux',
    'redux',
    'react-tap-event-plugin',
    'material-ui'
    /**
     * add more name library
     */
];
const config      = {
    entry  : {
        bundle: './client/index.js',
        vendor: VENDOR_LIBS
    },
    output : {
        path    : path.join(__dirname, 'public'),
        // filename: '[name].[chunkhash].js',
        filename: '[name].js',
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
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new HtmlWebPackPlugin({
            template: 'client/index.html'
        })
    ]
};

module.exports = config;