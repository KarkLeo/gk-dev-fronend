import * as actions from './actions'
import * as cartMessages from 'common/constans/cart-messages'
import { ProductCardType } from 'services/static'
import { UserAddress } from 'services/public'
import { CartSettingsTypes, OrderDetailResponse } from 'services/private'

export interface OrderModalType extends OrderDetailResponse {}

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

//===== Cart Message Info =====

export interface CartMessageInfo {
  message: keyof typeof cartMessages | null
  value: number[]
}
