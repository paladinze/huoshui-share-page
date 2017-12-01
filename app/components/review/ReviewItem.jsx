import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment().locale('zh-cn')

class ReviewItem extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <Comment>
        <Comment.Avatar src={this.props.Author.avatar} />
        <Comment.Content>
          <Comment.Author as="a">{this.props.Author.username}</Comment.Author>
          <Comment.Metadata>
            <div>{moment(this.props.createdAt).fromNow()}</div>
          </Comment.Metadata>
          <Comment.Text>
            {this.props.text}
          </Comment.Text>
        </Comment.Content>
      </Comment>
    )
  }
}

export default ReviewItem
