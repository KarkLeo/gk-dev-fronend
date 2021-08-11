import { ProductCardType } from 'services/static'

export const addCartProductAction = (product: ProductCardType) => ({
  type: 'CART/ADD_CART_PRODUCT' as const,
  product,
})

export const setCartProductCountAction = (slug: string, count: number) => ({
  type: 'CART/SET_COUNT_CART_PRODUCT' as const,
  slug,
  count,
})

export const removeCartProductAction = (slug: string) => ({
  type: 'CART/REMOVE_CART_PRODUCT' as const,
  slug,
})

export const cleanCartAction = () => ({
  type: 'CART/CLEAN_CART' as const,
})
