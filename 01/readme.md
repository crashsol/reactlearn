# 从零创建项目
 - 全局安装webpack 
   > npm i webpack -g
     npm i webpack-cli -g
 - 搭建项目结构
    - npm init -y 
    - 创建dist和src文件夹
    - 在src创建index.html和main.js
    - 添加webpack
      > yarn add webpack -D
        yarn add webpack-cli -D
        yarn add webpack-dev-server -D
    - 在package.json，scripts中添加 
      > "dev":"webpack-dev-server"
  - 添加在内存中加载index.html
    ```
    npm i html-webpack-plugin -D
    //获取文件路径
     const path = require('path');
     //使用html-webpack-plugin 模块
    const HtmlWebPackPlugin = require('html-webpack-plugin'); 

    module.exports = {
    mode: 'development', //production  development
    plugins: [
        //使用html-webpack-plugin模块，加载index.html文件
        new HtmlWebPackPlugin({
            template: path.join(__dirname,'./src/index.html'), //源文件
            filename: 'index.html' //内存中的文件位置
        })
    ]
}
    ```
# 添加react配置信息
