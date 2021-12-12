import { client } from '../'
import { OrderRequest, SimpleOrderRequest } from './types'
import { OrderDetailResponse, OrderResponse } from '../private'

export const orders = async (order: OrderRequest): Promise<OrderResponse> => {
  const res = await client.post<OrderResponse>('/order', {
    ...order,
  })

  return res.data
}

export const simpleOrders = async (
  order: SimpleOrderRequest
): Promise<OrderDetailResponse> => {
  const res = await client.post<OrderDetailResponse>('/order/simple', {
    ...order,
  })

  return res.data
}
