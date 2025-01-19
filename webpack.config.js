const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './javascript/contact.js',  // Your entry file (adjust if needed)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    plugins: [
        new Dotenv(),  // Load environment variables from .env
        new HtmlWebpackPlugin({
            template: './index.html',  // Path to your HTML template file
        }),
    ],
    mode: 'development',  // Change to 'production' for production build
};
