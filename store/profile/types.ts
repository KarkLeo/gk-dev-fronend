import * as actions from './actions'
import { UserAddressResponse } from 'services/public'
import { OrderResponse } from '../../services/public/types/orders.types'

export interface ProfileState {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  delivery_info: UserAddressResponse[] | null
  orders: OrderResponse[]
}

type ActionsName = keyof typeof actions
export type Action = ReturnType<typeof actions[ActionsName]>
