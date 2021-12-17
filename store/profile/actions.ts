import { OrderProfileResponse, UserAddressResponse } from 'services/public'

export const setProfileAction = (profile: {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  orders: OrderProfileResponse[]
}) => ({
  type: 'PROFILE/SET_PROFILE' as const,
  profile,
})

export const cleanProfileAction = () => ({
  type: 'PROFILE/CLEAN_PROFILE' as const,
})
