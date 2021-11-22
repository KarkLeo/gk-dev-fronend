import * as actions from './actions'
import { ProductCardType } from 'services/static'
import { UserAddress } from 'services/public'
import { CartSettingsTypes } from 'services/private/types'

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
  setting: CartSettingsTypes | null
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
