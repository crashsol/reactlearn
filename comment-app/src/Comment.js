import React, { Component } from 'react';
import PropTypes from 'prop-types'

/* 评论内容 */
export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  /* 定时器 */
  static timer;
  constructor() {
    super()
    this.state = {
      timeString: ''
    }
  }
  componentWillMount = () => {
    this._updateTimeString()

    /* 添加定时器 */
    this.timer = setInterval(() => {
      this._updateTimeString()
    }, 5000);

  }
  /* 卸载定期器 */
  componentWillUnmount = () => {
    clearInterval(this.time)
  }

  _updateTimeString = () => {
    const comment = this.props.comment
    const duration = (+new Date() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
      </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
      </div>
    )
  }
}
