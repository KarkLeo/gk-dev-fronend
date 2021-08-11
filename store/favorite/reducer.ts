import { Action, FavoriteState } from './types'
import { initialState } from './state'

export const favoriteReducer = (
  state: FavoriteState = initialState,
  action: Action
): FavoriteState => {
  switch (action.type) {
    case 'FAVORITE/ADD_FAVORITE_PRODUCT':
      return {
        ...state,
        products: { ...state.products, [action.product.slug]: action.product },
      }
    case 'FAVORITE/REMOVE_FAVORITE_PRODUCT': {
      const { [action.slug]: _, ...products } = state.products
      return { ...state, products: products }
    }
    case 'FAVORITE/CLEAN_FAVORITE':
      return { products: {} }
    default:
      return state
  }
}
