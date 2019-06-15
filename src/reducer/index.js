import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import history from '../helpers/history'

export default combineReducers({
  counter: counterReducer,
  router: connectRouter(history)
})
