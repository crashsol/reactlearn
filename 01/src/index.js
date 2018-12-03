import React from 'react';  //创建组件
import ReactDOM from 'react-dom'; //将创建好的组件在页面中显示

//创建虚拟DOM元素
const h2 = React.createElement('h2',null,'这是一个H2');

 
//渲染元素在app容器中
ReactDOM.render(h2,document.getElementById('app'));

