import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }

  }
  /* 将添加评论方法通过props 传递给 CommentInput组件 ，  
  并接受CommentInput 返回的数据*/
  handleSubmitComment = (comment) => {

    
    /* 将添加的的数据报错到 comments中，并重新渲染界面 */
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })

  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment} />
        {/* 将管理comments传入 CommentList组件 */}
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}
