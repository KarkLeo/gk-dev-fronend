import { UserAddressResponse } from '../../services/public'
import { OrderResponse } from '../../services/public/types/orders.types'

export const setProfileAction = (profile: {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  orders: OrderResponse[]
}) => ({
  type: 'PROFILE/SET_PROFILE' as const,
  profile,
})

export const cleanProfileAction = () => ({
  type: 'PROFILE/CLEAN_PROFILE' as const,
})
