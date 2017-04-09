import React from 'react'
import PostForm from '../components/PostForm'

const NewPost = (props) => (
  <section>
    <h1>New Post</h1>
    <PostForm router={props.router} />
  </section>
)

export default NewPost
