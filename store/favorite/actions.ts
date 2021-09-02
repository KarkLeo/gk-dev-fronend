import { ProductCardType } from 'services/static'

export const addFavoriteProductAction = (product: ProductCardType) => ({
  type: 'FAVORITE/ADD_FAVORITE_PRODUCT' as const,
  product,
})

export const addFavoriteProductsAction = (products: ProductCardType[]) => ({
  type: 'FAVORITE/ADD_FAVORITE_PRODUCTS' as const,
  products,
})

export const removeFavoriteProductAction = (code: string) => ({
  type: 'FAVORITE/REMOVE_FAVORITE_PRODUCT' as const,
  code,
})

export const cleanFavoriteAction = () => ({
  type: 'FAVORITE/CLEAN_FAVORITE' as const,
})
