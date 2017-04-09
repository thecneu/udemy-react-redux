import React from 'react'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import App from './App'
import Post from './containers/Post'
import Posts from './containers/Posts'
import NewPost from './containers/NewPost'

const Root = () => (
  <Router history={browserHistory}>
      <Route component={App}>
        <Route path="posts" component={Posts} />
        <Route path="posts/new" component={NewPost} />
        <Route path="posts/:id" component={Post} />
      </Route>
      <Redirect from="/" to="posts" />
  </Router>
)

export default Root
