import * as actions from './actions'
import { OrderProfileResponse, UserAddressResponse } from 'services/public'

export interface ProfileState {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  orders: OrderProfileResponse[]
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
