import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <h1>Posts</h1>
    )
  }
}

export default connect(null,
  (dispatch) => {

    return {
      getPosts: dispatch(getPosts)
    }
  }
)(Posts)
