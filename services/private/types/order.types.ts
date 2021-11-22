export interface OrderCartInfo {
  cart: {
    product: string
    count: number
    current_price: number
    vendor_code: string
  }[]
  totalCost: number
  discount: number
  discountedCost: number
}
