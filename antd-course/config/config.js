/* umi的配置 */
export default {
    /* 配置page文件夹用单数形式 */
    singular: true,
    /* 插件配置 */
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            //启用 antd插件
            antd: true
        }]
    ],
    /* 路由配置 */
    routes: [{
            path: '/',
            component: '../layout',
            routes: [{
                path: 'helloworld',
                component: './HelloWorld'
            }]
        }
    ]
};