
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      /* 使用antd组件 */
      antd: true,
      /* 使用dva进行状态管理 */
      dva: true,
      /* 实现路由级的动态加载（code splitting），可按需指定哪一级的按需加载。 */
      dynamicImport: true,
      /* html title */
      title: 'umi-quickstart',
      /* 开启 webpack 缓存，
      二次启动时间减少 80%。推荐非 windows 电脑使用，windows
      下由于大文件 IO 比较慢，可自行决定是否启用 */
      hardSource: false,
    }],
  ],
}
