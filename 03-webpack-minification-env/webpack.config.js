const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development", // production || developments

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundled.main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    },

    plugins: [

    ]

};

if (process.env.NODE_ENV === 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
