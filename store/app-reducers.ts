import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { modalReducer } from './modal'
import { profileReducer } from './profile'
import { favoriteReducer } from './favorite'
import { cartReducer } from './cart'
import { currencyReducer } from './currency'

const appReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  profile: profileReducer,
  favorite: favoriteReducer,
  cart: cartReducer,
  currency: currencyReducer,
})

export default appReducers
