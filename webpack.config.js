const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './javascript/homepage.js', // Entry point of your app
    output: {
        filename: 'bundle.js', // Output JavaScript bundle
        path: path.resolve(__dirname, 'dist'), // Output folder
        clean: true, // Clean 'dist' folder before each build
    },
    resolve: {
        extensions: ['.js', '.json'], // Extensions Webpack will resolve
    },
    plugins: [
        new Dotenv(), // Load environment variables from .env
        new HtmlWebpackPlugin({
            template: './index.html', // Source HTML file
            filename: 'index.html', // Output file name in 'dist' folder
        }),
    ],
    mode: 'development', // Development mode
};
