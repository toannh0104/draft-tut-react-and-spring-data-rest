var path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    entry: './app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new BowerWebpackPlugin()]
};