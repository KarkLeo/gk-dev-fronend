import * as actions from './actions'
import { ProductCardType } from 'services/static'

export interface CartState {
  products: Record<string, { product: ProductCardType; count: number }>
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
