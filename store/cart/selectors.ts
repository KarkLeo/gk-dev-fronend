import { AppState } from '../types'
import { createSelector } from 'reselect'
import { ProductCardType } from 'services/static'
import { UserAddress } from '../../services/public'
import {
  getInitProfileAddressSelector,
  getProfileAddressSelector,
} from '../profile'

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

export const getOrderCartSelector = createSelector(
  getCartProductsSelector,
  (items) =>
    items.map((i) => ({
      product: i.product.vendor_code,
      count: i.count,
    }))
)

//===== Order data =====

export const getOrderAddressIDSelector = (state: AppState): string | null =>
  state.cart.deliveryInfo.addressID

export const getNewOrderAddressSelector = (
  state: AppState
): UserAddress | null => state.cart.deliveryInfo.newAddress

export const getOrderDescriptionSelector = (state: AppState): string =>
  state.cart.description

export const getInitOrderAddressSelector = createSelector(
  getNewOrderAddressSelector,
  getInitProfileAddressSelector,
  (newAddress, initAddress) => newAddress || initAddress
)

export const isNewOrderAddressSelector = createSelector(
  getOrderAddressIDSelector,
  (addressID): boolean => !addressID
)

export const getOrderDeliverAddressSelector = createSelector(
  getOrderAddressIDSelector,
  getNewOrderAddressSelector,
  getProfileAddressSelector,
  (addressID, newAddress, addresses): UserAddress | null => {
    if (!addressID) return newAddress
    else {
      const res = addresses && addresses.find((i) => i.id === addressID)
      return res
        ? {
            first_name: res.first_name,
            last_name: res.last_name,
            phone_number: res.phone_number,
            is_novaposhta: res.is_novaposhta,
            address: res.address || '',
            city: res.city || '',
            novaposhta_number: res.novaposhta_number?.toString() || '',
          }
        : null
    }
  }
)
