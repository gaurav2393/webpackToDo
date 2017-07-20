const webpack = require('webpack');
const webpackValidator = require('webpack-validator');
const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {    
    const config = {
        context: resolve('src'),
        entry: {
            app: './toDo.js'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common' // Specify the common bundle's name.
            })
        ],
        output: {
            path: resolve(__dirname, './dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        devtool: env.prod ? 'source-map': 'eval',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                      presets: ['es2015']
                    }
                }, {
                    test: /\.less$/,
                    loaders: ['style-loader', 'css-loader', 'less-loader']
                }
            ]
        }
    }
    return webpackValidator(config)
}