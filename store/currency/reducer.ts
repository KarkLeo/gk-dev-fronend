import { Action, CurrencyState } from './types'
import { initialState } from './state'

export const currencyReducer = (
  state: CurrencyState = initialState,
  action: Action
): CurrencyState => {
  switch (action.type) {
    case 'CURRENCY/SET_CURRENCY':
      return { ...state, values: action.values }
    default:
      return state
  }
}
