const path = require('path');

module.exports = {
    entry: '/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js', //mainProd я уже до этого сделал, чтобы вы видели, что все работает
        publicPath: '/',
    },
    devServer: {
        proxy: {
            '/api': 'http://127.0.0.1:4000',
        },
        historyApiFallback: true
    }
};
