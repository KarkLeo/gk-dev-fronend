import { AppState } from '../types'
import { createSelector } from 'reselect'
import { ProductCardType } from 'services/static'

export const getCartRecordSelector = (state: AppState) => state.cart.products

export const getCartProductsSelector = createSelector(
  getCartRecordSelector,
  (record): { product: ProductCardType; count: number }[] =>
    Object.values(record)
)

export const getCartProductsCountSelector = createSelector(
  getCartRecordSelector,
  (record): number => Object.values(record).length
)

export const getTotalCartPriceSelector = createSelector(
  getCartProductsSelector,
  (products): number =>
    products.reduce((res, i) => res + i.count * i.product.price, 0)
)
