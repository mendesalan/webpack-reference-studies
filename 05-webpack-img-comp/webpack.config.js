const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var envMode = process.env.NODE_ENV
var inProduction = (process.env.NODE_ENV === 'production')

module.exports = {
    mode: envMode,

    entry: {
        app: [
            './src/main.js',
            './src/main.scss'
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundled.main.js'
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },

            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash].[ext]'
                }
            }
        ]
    },

    plugins: [

        new ExtractTextPlugin("styles.css"),

        new webpack.LoaderOptionsPlugin({

            minimize: inProduction

        })
    ]

};

if (inProduction) {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}
