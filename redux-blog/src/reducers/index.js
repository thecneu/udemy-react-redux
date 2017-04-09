import { combineReducers } from 'redux'
import { GET_POST, GET_POSTS, NEW_POST, DELETE_POST } from '../actions'

function posts(state = [], action) {
  switch(action.type) {
    case GET_POSTS:
      return action.payload
    case NEW_POST:
      return [
      ...state,
      ...action.payload
      ]
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)
    default:
      return state
  }
}

function selected(state = {}, action) {
  switch(action.type) {
    case GET_POST:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  posts,
  selected
})

export const getPost = (state) => ({post: state.selected})
