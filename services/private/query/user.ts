import { PRODUCT_CART_QUERY, PRODUCT_CART_SHOT_QUERY } from '../../static/query'

export const DELIVERY_QUERY = `
  id
  address
  first_name
  last_name
  phone_number
  is_novaposhta
  city
  novaposhta_number
  post_code
`

export const ORDER_QUERY = `
  id
  number
  date
  delivery_info  {
    ${DELIVERY_QUERY}
  }
  cart_item {
    product {
      ${PRODUCT_CART_SHOT_QUERY}
    }
    current_price
    count
  }
  total_cost
  discount
  discounted_cost
  description
`

export const USER_QUERY = `
  id
  first_name
  last_name
  email
  phone_number
  delivery_info {
    ${DELIVERY_QUERY}
  }
  favorites {
    ${PRODUCT_CART_QUERY}
  }
  orders (sort: "date:DESC") {
    ${ORDER_QUERY}
  }
`
