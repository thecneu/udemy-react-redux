import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions'
import PostItem from '../components/PostItem'

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    return (
      <section className="posts">
        <h1>Posts</h1>
        {this.props.posts.map((post) => <PostItem key={post.id} {...post} />)}
      </section>
    )
  }
}

export default connect(({posts}) => ({posts}), { getPosts })(Posts)
