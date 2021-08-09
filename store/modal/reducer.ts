import { Action, ModalState } from './types'
import { initialState } from './state'

export const modalReducer = (
  state: ModalState = initialState,
  action: Action
): ModalState => {
  switch (action.type) {
    case 'MODAL/OPEN_LOGIN':
      return { ...state, isOpen: true, modal: 'LOGIN' }
    case 'MODAL/OPEN_REGISTER':
      return { ...state, isOpen: true, modal: 'REGISTER' }
    case 'MODAL/CLOSE':
      return { ...state, isOpen: false, modal: null }
    default:
      return state
  }
}
