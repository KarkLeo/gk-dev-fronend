import { Action, AuthState } from './types'
import { initialState } from './state'

export const authReducer = (
  state: AuthState = initialState,
  action: Action
): AuthState => {
  switch (action.type) {
    case 'AUTH/CLEAN_AUTH':
      return { ...state, isAuth: false, userID: null }
    case 'AUTH/SET_AUTH':
      return {
        ...state,
        isAuth: true,
        userID: action.userID,
      }
    default:
      return state
  }
}
