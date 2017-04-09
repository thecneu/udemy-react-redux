import { combineReducers } from 'redux'
import { GET_POST, GET_POSTS, NEW_POST, DELETE_POST } from '../actions'

function posts(state = [], action) {
  switch(action.type) {
    case GET_POST:
      return state
    case GET_POSTS:
      return action.payload
    case NEW_POST:
      return state
    case DELETE_POST:
      return state
    default:
      return state
  }
}

export default combineReducers({
  posts
})
