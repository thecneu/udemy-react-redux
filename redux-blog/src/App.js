import React from 'react'
import { Link } from 'react-router'

const App = ({children}) => (
  <main className="container">
    <nav>
      <div className="text-right"><Link to="/" className="btn btn-primary">Posts</Link></div>
      <div className="text-right"><Link to="/posts/new" className="btn btn-primary">New Post</Link></div>
    </nav>
    {children}
  </main>
)

export default App
