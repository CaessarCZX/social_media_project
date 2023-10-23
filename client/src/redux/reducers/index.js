import { combineReducers } from 'redux'
import { alertReducer as alert } from './alertReducer.js'
import { authReducer as auth } from './authReducer.js'

export default combineReducers({
  auth,
  alert
})
