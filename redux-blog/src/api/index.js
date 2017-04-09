import axios from 'axios'
const URL = 'http://reduxblog.herokuapp.com/api/posts'

function getPosts() {
  return axios.get(`${URL}?key=420`).then(req => req.data)
}

function getPost(id) {
  return axios.get(`${URL}/${id}?key=420`).then(req => req.data)
}

function newPost(post) {
  return axios.post(`${URL}?key=420`, post).then(req => req.data)
}

function deletePost(id) {
  return axios.delete(`${URL}/${id}?key=420`, ).then(req => req.data)
}

export default {
  getPost,
  getPosts,
  newPost,
  deletePost
}
