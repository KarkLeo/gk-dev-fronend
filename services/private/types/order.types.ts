import { UserAuthResponse } from 'services/public'
import { CartMessageInfo } from 'store/cart'

export interface OrderCartProduct {
  product: string
  count: number
  current_price: number
  vendor_code: string
}

export interface OrderCartInfo {
  cart: OrderCartProduct[]
  totalCost: number
  discount: number
  discountedCost: number
}

export interface OrderDetailResponse {
  number: string
  cart: OrderCartInfo
  message: CartMessageInfo
}

export interface OrderResponse extends UserAuthResponse, OrderDetailResponse {}
