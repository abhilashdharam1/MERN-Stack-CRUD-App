const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        publicPath: '',
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]']
          }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        inline:true,
        port: 8080
    }
}

