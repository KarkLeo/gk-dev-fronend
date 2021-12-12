import { ProductCardType } from 'services/static'
import { UserAddress } from 'services/public'
import { CartSettingsTypes } from 'services/private/types'
import { OrderModalType } from './types'

export const addCartProductAction = (product: ProductCardType) => ({
  type: 'CART/ADD_CART_PRODUCT' as const,
  product,
})

export const setCartProductCountAction = (
  vendor_code: string,
  count: number
) => ({
  type: 'CART/SET_COUNT_CART_PRODUCT' as const,
  vendor_code,
  count,
})

export const removeCartProductAction = (vendor_code: string) => ({
  type: 'CART/REMOVE_CART_PRODUCT' as const,
  vendor_code,
})

export const cleanCartAction = () => ({
  type: 'CART/CLEAN_CART' as const,
})

//===== address =====

export const changeOrderAddressIDAction = (addressID: string | null) => ({
  type: 'CART/CHANGE_ORDER_ADDRESS_ID' as const,
  addressID,
})

export const setNewOrderAddressAction = (address: UserAddress | null) => ({
  type: 'CART/SET_NEW_ORDER_ADDRESS' as const,
  address,
})

//===== description =====

export const setOrderDescriptionAction = (description: string) => ({
  type: 'CART/SET_ORDER_DESCRIPTION' as const,
  description,
})

//===== modal =====

export const setOrderModalAction = (modal: OrderModalType) => ({
  type: 'CART/SET_ORDER_MODAL' as const,
  modal,
})

//===== settings =====

export const setCartSettings = (settings: CartSettingsTypes) => ({
  type: 'CART/SET_SETTINGS' as const,
  settings,
})
