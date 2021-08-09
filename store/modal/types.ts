import * as actions from './actions'

export type ModalType = 'LOGIN' | 'REGISTER'

export interface ModalState {
  isOpen: boolean
  modal: ModalType | null
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
