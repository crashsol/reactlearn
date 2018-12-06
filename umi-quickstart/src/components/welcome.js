import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd';

/* 创建一个无状态组件，使用props接收传递过来的属性 */
function welcome(props) {
  return (
    <div>
      {props.username} say: {props.message}

      <Button onClick={props.clickHandle}>AntD Click</Button>
    </div>
  )
}
/* 定义属性类型 */
welcome.propTypes = {
  /* 定义属性类型为string */
  username: PropTypes.string,
  /* 定义属性类型为number */
  message: PropTypes.number,
  /* 定义一个方法 */
  clickHandle: PropTypes.func
}
export default welcome

