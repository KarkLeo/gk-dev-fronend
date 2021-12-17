import { OrderProfileResponse, UserAddressResponse } from '../../public'
import { ProductCardType } from '../../static'

export interface UserResponseTypes {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  favorites: ProductCardType[]
  orders: OrderProfileResponse[]
  is_wholesaler: boolean | null
}
