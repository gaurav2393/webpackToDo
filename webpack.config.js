const webpackValidator = require('webpack-validator');
const { resolve } = require('path');

module.exports = () => {
    const config = {
        context: resolve('js'),
        entry: './toDo.js',
        output: {
            path: resolve('dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
    }
    return webpackValidator(config)
}