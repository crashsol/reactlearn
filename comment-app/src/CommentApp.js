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
  /* 加载评论 */
  componentWillMount = () => {
    this._loadComments();
  }

  //从本地storage中加载评论
  _loadComments = () => {
    let comments = localStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({
        comments
      })
    }
  }
  // 将评论保存到本地storage
  _saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  /* 将添加评论方法通过props 传递给 CommentInput组件 ，  
  并接受CommentInput 返回的数据*/
  handleSubmitComment = (comment) => {

    /* 将添加的的数据报错到 comments中，并重新渲染界面 */
    const comments = this.state.comments
    comments.push(comment)
    this.setState({
      comments: comments
    })
    /* 数据保存到本地 */
    this._saveComments(comments)
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
