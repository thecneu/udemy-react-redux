import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPost } from '../actions'

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.params.id)
  }

  render() {
    return (
      <article>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </article>
    )
  }
}

export default connect(
  ({ selected }) => ({post: selected}),
  { getPost }
)(Post)
