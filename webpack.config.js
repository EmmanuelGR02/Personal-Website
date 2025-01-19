const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: 'javascript/homepage.js', // Main entry point
    output: {
        filename: '[name].js', // Use the original name for JavaScript
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean the dist folder before building
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Handle CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Handle image files
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Output to the images folder
                },
            },
            {
                test: /\.html$/, // Process and copy HTML files
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        // Process the main index.html
        new HtmlWebpackPlugin({
            template: './index.html', // Ensure this points to your actual index.html
            filename: 'index.html',
            inject: true, // Automatically inject the JS and CSS files
        }),
        // Copy static files (CSS, images, additional HTML files)
        new CopyWebpackPlugin({
            patterns: [
                { from: 'style', to: 'style' }, // Copy CSS files
                { from: 'images', to: 'images' }, // Copy images
                { from: 'javascript', to: 'javascript' }, // Copy javascript folder
                { from: '*.html', to: '[name][ext]', globOptions: { ignore: ['**/index.html'] } }, // Exclude index.html
            ],
        }),
    ],
    mode: 'development', // Adjust mode as needed (e.g., production)
};
