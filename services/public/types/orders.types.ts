import {
  UserAddress,
  UserAddressEdit,
  UserAddressResponse,
} from './address.types'
import { DefaultStrapiImage } from '../../static'

export interface OrderCartProductResponse {
  id: string
  slug: string
  name: string
  category: {
    slug: string
  }
  photos: DefaultStrapiImage[]
  locale: string
  localizations: {
    locale: string
    slug: string
    name: string
    category: {
      slug: string
    }
  }[]
}

export interface OrderCartItemResponse {
  product: OrderCartProductResponse
  current_price: number
  count: number
}

export interface OrderResponse {
  id: string
  number: string
  date: string
  delivery_info: UserAddressResponse
  cart_item: OrderCartItemResponse[]
  total_cost: number
  discount: number
  discounted_cost: number
  description: number
}

export interface OrderRequest {
  jwt: string
  userID: string
  delivery_info: UserAddress
  cart_items: {
    product: string
    count: number
  }[]
  description: string
}
