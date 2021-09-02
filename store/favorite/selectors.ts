import { AppState } from '../types'
import { createSelector } from 'reselect'
import { ProductCardType } from 'services/static'

export const getFavoriteRecordSelector = (state: AppState) =>
  state.favorite.products

export const getFavoriteProductsSelector = createSelector(
  getFavoriteRecordSelector,
  (record): ProductCardType[] => Object.values(record)
)

export const getFavoriteProductsCountSelector = createSelector(
  getFavoriteRecordSelector,
  (record): number => Object.values(record).length
)

export const getFavoriteProductsCodesSelector = createSelector(
  getFavoriteRecordSelector,
  (record): string[] => Object.keys(record)
)

export const getFavoriteProductsId = createSelector(
  getFavoriteProductsSelector,
  (products): string[] => products.map((i) => i.id)
)
