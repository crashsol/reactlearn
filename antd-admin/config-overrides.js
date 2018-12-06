const {
    injectBabelPlugin
} = require('react-app-rewired');

//加载LESS
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config
    );
    //自定义主题颜色
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1890ff" },
        javascriptEnabled: true,
    })(config, env);
    return config;
};