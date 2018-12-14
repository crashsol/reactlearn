import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

  /* 默认创建一个 comments 空数组
    防止未传入props时报错 
  */
  static defaultProps = {
    comments: []
  }


  render() {
    return (
      <div>
        {
          this.props.comments.map((item, i) =>
            <Comment comment={item} key={i} />
          )
        }
      </div>
    )
  }
}
