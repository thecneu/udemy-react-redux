import api from '../api'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const NEW_POST = 'NEW_POST'
export const DELETE_POST = 'DELETE_POST'

export const getPost = (id) => ({
  type: GET_POST,
  payload: api.getPost(id)
})

export const getPosts = () => ({
  type: GET_POSTS,
  payload: api.getPosts()
})

export const newPost = (post) => ({
  type: NEW_POST,
  payload: api.newPost(post)
})

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: api.deletePost(id)
})
