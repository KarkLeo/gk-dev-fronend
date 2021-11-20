import * as actions from './actions'

export interface AuthState {
  isAuth: boolean
  isTested: boolean
  userID: string | null
  isWholesaler: boolean | null
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
