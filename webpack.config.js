var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/app',
        publicPath: "/",
        filename: './js/render.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            //{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?stage=0',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                },
            },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }

        ]
    }
};