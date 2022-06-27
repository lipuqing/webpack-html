const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniExtract = require('mini-css-extract-plugin');
const os = require('os');
///获取本机ip///
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
  entry: {
    plugins: [path.resolve(__dirname, 'src/common/plugins.js')],
    common: [path.resolve(__dirname, 'src/common/common.js')],
    city: [path.resolve(__dirname, 'src/common/city.js')],
    // 测试
    test: path.resolve(__dirname, 'src/js/test/test.js'),  // d屏2

  },

  output: {
    filename: 'js/[name]_[hash:10].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // {
      //     test: [/\.less$/],
      //     use: ['style-loader', 'css-loader', 'less-loader'],
      // },
      {
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
  plugins: [
    new MiniExtract({
      filename: 'css/[name]_[hash:10].css',
    }),
    // 测试
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: path.resolve(__dirname, 'src/html/test/test.html'),
      hash: true,
      chunks: ['plugins', 'common', 'test'],
      minify: {
        //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    }),
  ],

  // 自动化打包
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: myHost,
    port: 8080,
    open: true,
  },
};