import * as actions from './actions'

export interface CurrencyState {
  values: Record<string, number>
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
