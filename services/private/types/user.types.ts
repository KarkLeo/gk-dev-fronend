import { UserAddressResponse } from '../../public'
import { ProductCardType } from '../../static'
import { OrderResponse } from '../../public/types/orders.types'

export interface UserResponseTypes {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  favorites: ProductCardType[]
  orders: OrderResponse[]
}
