import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import style from './index.css'

/* Link */
import Link from 'umi/link';
const { Header, Sider, Content, Footer } = Layout
const { SubMenu } = Menu


export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider className={style.sider}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
            <Menu.Item key="1"><Icon type="pie-chart" /><span>HelloWorld</span></Menu.Item>
            <SubMenu key='sub1' title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}>
              <Menu.Item key="2"><Link to="/button">Button</Link> </Menu.Item>
              <Menu.Item key="3"><Link to="/icon">Icon</Link> </Menu.Item>
              <Menu.Item key="4"><Link to="/grid">grid</Link> </Menu.Item>
              <Menu.Item key="5"><Link to="/modal1">modal1</Link> </Menu.Item>
              <Menu.Item key="6"><Link to="/modal2">modal2</Link> </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={style.header} >header</Header>
          <Content className={style.content}>
            <div style={{ padding: '20px', minHeight: '360px', background: '#fff' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer className={style.footer}>footer</Footer>
        </Layout>
      </Layout >
    )
  }
}
