/* 
  向外暴露一个打包的配置对象
  因为webpck是基于Node构建的
 */
const path =  require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入内存中自动生成index.html
//创建一个插件实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件
    filename: 'index.html'
});
module.exports = {
    mode: 'development', //production  development
    plugins: [
        htmlPlugin
    ]
}