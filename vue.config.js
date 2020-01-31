const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            filename: 'index.html',
            title: 'Index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    filenameHashing: true,
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/val.scss";`
            }
        }
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
        },
        resolve: {
            alias: {
            }
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
}