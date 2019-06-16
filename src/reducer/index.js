import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user'
import userViewedReducer from './user-viewed'
import productsReducer from './products'
import providersReducer from './providers'
import consumersReducer from './consumers'
import history from '../helpers/history'

export default combineReducers({
  user: userReducer,
  userViewed: userViewedReducer,
  router: connectRouter(history),
  products: productsReducer,
  providers: providersReducer,
  consumers: consumersReducer
})
