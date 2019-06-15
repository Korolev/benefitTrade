import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user'
import history from '../helpers/history'

export default combineReducers({
  user: userReducer,
  router: connectRouter(history)
})
