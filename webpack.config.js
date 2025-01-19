const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './javascript/homepage.js', // Entry point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the dist folder before every build
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Process CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // Process image files
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json'], // Resolve these extensions
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './src/index.html', // Source HTML file
            filename: 'index.html',
        }),
    ],
    mode: 'development', // Development mode
};
