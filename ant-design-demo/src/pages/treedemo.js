import React, { Component } from 'react'
import { Tree } from 'antd'
const TreeNode = Tree.TreeNode
export default class treedemo extends Component {

  state = {
    rightClickNodeTreeItem: {
      pageX: "",
      pageY: "",
      id: "",
      categoryName: "",
      show: false,

    }
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  onRightClick = ({ event, node }) => {

    const positionInfo = event.currentTarget.getBoundingClientRect();
    this.setState({
      rightClickNodeTreeItem: {
        pageX: positionInfo.right,
        pageY: positionInfo.bottom,
        id: node.eventKey,
        categoryName: node.title,
        show:true
      }
    });
  }

  getNodeTreeRightClickMenu = () => {
    const { pageX, pageY, id, categoryName } = { ...this.state.rightClickNodeTreeItem };
    const tmpStyle = {


    };
    const menu = (
      <div style={{
        backgroundColor: '#eee',
        position: "absolute",
        left: `${pageX - 10}px`,
        top: `${pageY}px`,
        height: '300px',
        width: '200px'
      }} >
        <a>新增下级部门</a>
        <a>修改</a>
        <a>删除目录</a>
      </div>
    );
    return this.state.rightClickNodeTreeItem.show  ? menu : "";
  };

  render() {
    return (
      <div>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          onRightClick={this.onRightClick}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" disabled />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
          </TreeNode>

        </Tree>
        {this.getNodeTreeRightClickMenu()}
      </div>

    )
  }
}
