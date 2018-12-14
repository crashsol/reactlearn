import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {

  /* 默认创建一个 comments 空数组
    防止未传入props时报错 
  */
  static defaultProps = {
    comments: []   
  }
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  handleDeleteComment = (index) =>{
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  } 

  render() {
    return (
      <div>
        {
          this.props.comments.map((item, i) =>
            <Comment
             comment={item} 
             key={i} 
             onDeleteComment = {this.handleDeleteComment }
            />
          )
        }
      </div>
    )
  }
}
