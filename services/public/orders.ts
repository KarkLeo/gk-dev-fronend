import { client } from '../'
import { UserAuthResponse } from './types'
import { OrderRequest } from './types/orders.types'

export const orders = async (
  order: OrderRequest
): Promise<UserAuthResponse> => {
  const res = await client.post<UserAuthResponse>('/order', {
    ...order,
  })

  return res.data
}
