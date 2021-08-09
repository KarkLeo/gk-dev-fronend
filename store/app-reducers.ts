import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { modalReducer } from './modal'
import { profileReducer } from './profile'

const appReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  profile: profileReducer,
})

export default appReducers
