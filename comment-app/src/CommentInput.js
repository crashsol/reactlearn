import React, { Component } from 'react'

export default class CommentInput extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }

  setUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  setContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  /* 提交数据 */
  handleSubmitComment = () => {   

    // 检查数据合法性
    const { username, content } = this.state

    if(!username) 
    {
       alert('请输入用户名')
       return
    }    
    if(!content) 
    {
       alert('请输入评论内容')
       return
    }
   

    /* 调用props传入的提交方法 */
    if (this.props.onSubmit) {
     
      this.props.onSubmit({ username, content })
    }
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.setUserName} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.setContent} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmitComment}>
            发布
          </button>
        </div>
      </div>
    )
  }
}
