const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './javascript/contact.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json'], 
    },
    plugins: [
        new Dotenv() // Load environment variables from .env 
    ],
    mode: 'development', 
};
