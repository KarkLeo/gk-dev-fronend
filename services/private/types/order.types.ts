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
