export interface SimpleOrderFormType {
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string
  novaposhta_number: string
  address: string
  post_code: string
  email: string
  description: string
  reCapture: string
}

export interface SimpleOrderRequest extends SimpleOrderFormType {
  cart_items: {
    product: string
    count: number
  }[]
}
