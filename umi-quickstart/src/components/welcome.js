import React from 'react'

/* 创建一个无状态组件，使用props接收传递过来的属性 */
export default function welcome(props) {
  return (
    <div>
     Message form welcome:{ props.username}: {props.message}
    </div>
  )
}
