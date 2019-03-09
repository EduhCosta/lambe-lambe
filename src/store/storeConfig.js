import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
  message: messageReducer,
})

const storeConfig = () => {
  const middleware = compose(
    applyMiddleware(thunk)
  )
  return createStore(reducers, middleware)
}

export default storeConfig