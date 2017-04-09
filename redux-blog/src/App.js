import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getPosts } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.getPosts()
  }
  render() {
    return (
      <main className="container">
        <ul className="nav nav-pills">
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/posts/new">New Post</Link></li>
        </ul>
        {this.props.children}
      </main>
    )
  }
}

export default connect(null, { getPosts })(App)
