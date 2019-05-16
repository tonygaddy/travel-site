const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};
