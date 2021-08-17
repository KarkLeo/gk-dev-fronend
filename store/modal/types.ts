import * as actions from './actions'
import { ERROR_CODE } from './common'

export type ModalType = 'LOGIN' | 'REGISTER'

export type AuthErrorsType = typeof ERROR_CODE[number] | null

export interface ModalState {
  isOpen: boolean
  modal: ModalType | null
  error: AuthErrorsType
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
