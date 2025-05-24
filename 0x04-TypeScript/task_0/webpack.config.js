const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development', // Explicitly set mode
    entry: './js/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true, // Faster builds but type checking done by ForkTsChecker
                        configFile: 'tsconfig.json' // Explicit path to tsconfig
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Updated for webpack-dev-server v4+
        },
        compress: true,
        port: 9000,
        open: true // Automatically open browser
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(), // For type checking in separate process
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Student Table',
            template: './src/index.html' // Optional template file
        })
    ],
    output: {
        filename: '[name].[contenthash].js', // Better caching
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // For proper asset resolution
    }
};