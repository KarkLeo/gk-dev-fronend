import * as actions from './actions'
import { ProductCardType } from 'services/static'

export interface FavoriteState {
  products: Record<string, ProductCardType>
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
