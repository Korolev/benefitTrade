import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import thunk from 'redux-thunk'
import history from '../helpers/history'

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(history), logger)
)

const store = createStore(reducer, enhancer)

//dev only, no need in prod!
window.store = store

export default store
