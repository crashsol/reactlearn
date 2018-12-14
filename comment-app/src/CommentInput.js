import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  /* 限定传入props的类型 */
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  componentDidMount = () => {
    /* 加载用户名称 */
    this._loadUserName();
    /* 自动聚焦到评论框 */
    this.textarea.focus();
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
  /* 保存用户名称到本地  */
  _saveUserName = (username) => {
    localStorage.setItem('username', username)
  }
  _loadUserName = () => {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username
      })
    }
  }
  /* 提交数据 */
  handleSubmitComment = () => {

    // 检查数据合法性
    const { username, content } = this.state

    if (!username) {
      alert('请输入用户名')
      return
    }
    if (!content) {
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
  /* 用户名输入框失去焦点时,将UserName 保存到本地数据库*/
  handleUserNameBlur = (e)=>{
    this._saveUserName(e.target.value)
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.setUserName}
              onBlur={this.handleUserNameBlur}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.setContent}
            />
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
