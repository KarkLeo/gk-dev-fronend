import * as actions from './actions'
import { ProductCardType } from 'services/static'
import { UserAddress } from 'services/public'

export interface OrderModalType {
  number: string
  cost: number
}

export interface CartState {
  products: Record<string, { product: ProductCardType; count: number }>
  deliveryInfo: {
    addressID: string | null
    newAddress: UserAddress | null
  }
  description: string
  modal: null | OrderModalType
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
