import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const createStore = (initialState = {}) => {
  const middleware = [thunkMiddleware, loggerMiddleware, promise]
  const enhancers = []
  let composeEnhancers = compose
  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }
  const store = createReduxStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}
  return store
}

export default createStore
