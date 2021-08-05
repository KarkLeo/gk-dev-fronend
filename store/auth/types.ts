import * as actions from './actions'

export interface AuthState {
  isAuth: boolean
  userID: string | null
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
