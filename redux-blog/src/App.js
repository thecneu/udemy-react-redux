import React, { Component } from 'react'
import { Link } from 'found'

class App extends Component {
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

export default App
