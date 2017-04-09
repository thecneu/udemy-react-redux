import React from 'react'
import { createBrowserRouter } from 'found'
import { makeRouteConfig, Route, Redirect } from 'found/lib/jsx'
import App from './App'
import Post from './containers/Post'
import Posts from './containers/Posts'
import NewPost from './containers/NewPost'

const Root = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route path="posts" Component={Posts} />
      <Route path="posts/new" Component={NewPost} />
      <Route path="posts/:id" Component={Post} />
      <Redirect
        from="/"
        to="/posts"
      />
    </Route>
  ),
  renderError(props) {
    props.router.push('/')
  }
})

export default Root
