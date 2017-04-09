import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers'

function configureStore() {
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(promiseMiddleware)
  ))

  return store
}

export default configureStore
