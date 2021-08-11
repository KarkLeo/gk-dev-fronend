import { Action, CartState } from './types'
import { initialState } from './state'

export const cartReducer = (
  state: CartState = initialState,
  action: Action
): CartState => {
  switch (action.type) {
    case 'CART/ADD_CART_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          [action.product.slug]: {
            product: action.product,
            count: state.products[action.product.slug]
              ? state.products[action.product.slug].count + 1
              : 1,
          },
        },
      }
    case 'CART/REMOVE_CART_PRODUCT': {
      const { [action.slug]: _, ...products } = state.products
      return { ...state, products: products }
    }
    case 'CART/SET_COUNT_CART_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          [action.slug]: {
            ...state.products[action.slug],
            count: action.count,
          },
        },
      }
    case 'CART/CLEAN_CART':
      return { products: {} }
    default:
      return state
  }
}
