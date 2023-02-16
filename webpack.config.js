const path = require('path');
const MiniExtract = require('mini-css-extract-plugin');
const os = require('os');

const {
    html_entry,
    html_plugins
} = require('./config.js')

function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const myHost = getIPAdress();

module.exports = {
    mode: 'development', // production development
    entry: html_entry,
    output: {
        filename: 'js/[name]_[hash:10].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.(css|less)$/,
                use: [{
                        loader: MiniExtract.loader,
                        options: {},
                    },
                    'css-loader',
                    'less-loader',
                ],
            },

            {
                test: [/\.(jpg|png)$/],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10, // 文件小于10kb，输出DataUrl
                        outputPath: 'images', // 该路径相对于html输出路径
                        publicPath: './images',
                        name: '[name]' + '_' + '[hash:10]' + '.[ext]',
                    },
                }, ],
            },
            {
                test: [/\.html$/],
                use: [{
                    loader: 'html-loader',
                }, ],
            },
            {
                test: /\.art$/,
                loader: 'art-template-loader',
                options: {},
            },
        ],
    },
    plugins: html_plugins,
    // 自动化打包
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        host: myHost,
        port: 8080,
        // proxy: {
        //     '/api': {
        //         target: `https://mp.xxx.com/`,
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }, // 设置代理
        open: true,
    },
};