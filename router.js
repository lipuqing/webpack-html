/***
 * 
 * 简化文件创建
 * path: index 文件名
 * name:'详情页',
 * component: '文件路径；例:src/html/proform/info.html'
 * pulic: true, 是否需要copy的公共配置  默认需要
 * plugins:'', 私有配置
 * 
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let page = [{
    path: 'test',
    name: '测试',
    component: 'src/views/test/test',
    pulic: true,
    plugins: true,
    isStrong: true,
}, {
    path: 'form',
    name: '表单',
    component: 'src/views/form/form',
    pulic: false,
    plugins: true,
    isStrong: true,
}, {
    path: 'nojs',
    name: '没有js文件引入',
    component: 'src/views/nojs/one',
    pulic: false,
    plugins: false,
    isStrong: true,
}, ];

const html_entry = () => {
    let array = []
    for (let index = 0; index < page.length; index++) {
        const item = page[index];
        let plugins = {
            filename: `${item.path}.html`,
            template: path.resolve(__dirname, `${item.component}.html`),
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }
        if (!item.pulic) {
            plugins.chunks = []
        } else {
            plugins.chunks = ['plugins', 'common']
        }
        if (!!item.plugins) {
            plugins.chunks.push(item.path)
        }
        array.push(new HtmlWebpackPlugin(plugins))

    }
    return array
};
const html_plugins = () => {
    let open = (file) => {
        return path.resolve(__dirname, file)
    }
    let obj = `{`;
    for (let index = 0; index < page.length; index++) {
        const item = page[index];
        if (item.plugins) {
            // item.component = item.component.replace('src/html', 'src/js')
            if (index == (page.length - 1)) {
                obj += `"${item.path}":"${'./'+item.component +'.js'}"`
            } else {
                obj += `"${item.path}":"${'./'+item.component +'.js'}",`
            }
        }
    }
    obj += `}`
    return eval('(' + obj + ')')
};


//  返回数组 
exports.router = html_entry()
exports.entry = html_plugins()