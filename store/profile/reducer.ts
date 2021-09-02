import { Action, ProfileState } from './types'
import { initialState } from './state'

export const profileReducer = (
  state: ProfileState = initialState,
  action: Action
): ProfileState => {
  switch (action.type) {
    case 'PROFILE/SET_PROFILE':
      return { ...state, ...action.profile }
    case 'PROFILE/CLEAN_PROFILE':
      return {
        ...state,
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        delivery_info: null,
        orders: [],
      }
    default:
      return state
  }
}
