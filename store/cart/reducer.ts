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
          [action.product.vendor_code]: {
            product: action.product,
            count: state.products[action.product.vendor_code]
              ? state.products[action.product.vendor_code].count + 1
              : 1,
          },
        },
      }
    case 'CART/REMOVE_CART_PRODUCT': {
      const { [action.vendor_code]: _, ...products } = state.products
      return { ...state, products: products }
    }
    case 'CART/SET_COUNT_CART_PRODUCT':
      return {
        ...state,
        products: {
          ...state.products,
          [action.vendor_code]: {
            ...state.products[action.vendor_code],
            count: action.count,
          },
        },
      }
    case 'CART/CLEAN_CART':
      return {
        products: {},
        deliveryInfo: {
          addressID: null,
          newAddress: null,
        },
        description: '',
        modal: null,
      }
    case 'CART/CHANGE_ORDER_ADDRESS_ID':
      return {
        ...state,
        deliveryInfo: {
          ...state.deliveryInfo,
          addressID: action.addressID,
        },
      }
    case 'CART/SET_NEW_ORDER_ADDRESS':
      return {
        ...state,
        deliveryInfo: {
          ...state.deliveryInfo,
          newAddress: action.address,
        },
      }
    case 'CART/SET_ORDER_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      }
    case 'CART/SET_ORDER_MODAL':
      return { ...state, modal: action.modal }
    default:
      return state
  }
}
