import { Action, ModalState } from './types'
import { initialState } from './state'

export const modalReducer = (
  state: ModalState = initialState,
  action: Action
): ModalState => {
  switch (action.type) {
    case 'MODAL/OPEN_LOGIN':
      return { ...state, isOpen: true, modal: 'LOGIN', error: null }
    case 'MODAL/OPEN_REGISTER':
      return { ...state, isOpen: true, modal: 'REGISTER', error: null }
    case 'MODAL/CLOSE':
      return { ...state, isOpen: false, modal: null, error: null }
    case 'MODAL/SET_ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}
