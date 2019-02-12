'use strict';

const webpack = require('webpack')
const path = require('path')

module.exports = {

    entry: {
        app: [
            path.resolve(__dirname, 'src/index.ts')
        ],
        vendor: ['phaser']
    },

    devtool: 'cheap-source-map',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
        alias: {
            'phaser': path.join(__dirname, '/node_modules/phaser/src/phaser.js')
        }
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](phaser)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    filename: 'vendor.bundle.js'
                }
            }
        }
    }

};
