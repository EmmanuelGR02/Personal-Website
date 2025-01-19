const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './javascript/contact.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'], // Ensures that Webpack resolves the correct extensions
    },
    plugins: [
        new Dotenv() // Loads environment variables from .env into process.env
    ],
    mode: 'development', // Use 'production' for live sites
};
