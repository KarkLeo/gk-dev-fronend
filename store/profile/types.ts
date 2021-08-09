import * as actions from './actions'

export interface ProfileState {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
