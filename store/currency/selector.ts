import { AppState } from '../types'

export const getCurrencySelector = (state: AppState) => state.currency.values
