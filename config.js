const path = require("path");
const MiniExtract = require("mini-css-extract-plugin");
var CopyPlugin = require("copy-webpack-plugin");
const {
    router,
    entry
} = require('./router.js')
// entry
let obj = {
    plugins_head: [path.resolve(__dirname, 'src/common/jq.js')],
    common: [path.resolve(__dirname, 'src/common/common.js')],
}
exports.html_entry = Object.assign(obj, entry)
// plugins
let arr = [
    new MiniExtract({
        filename: 'css/[name]_[hash:10].css',
    }),
    new CopyPlugin([{
        from: path.resolve(__dirname, 'src/views/html/'),
        to: path.resolve(__dirname, 'dist/')
    }]),
]
exports.html_plugins = [...arr, ...router]