import { ProductCardType } from '../../services/static'

export const addFavoriteProductAction = (product: ProductCardType) => ({
  type: 'FAVORITE/ADD_FAVORITE_PRODUCT' as const,
  product,
})

export const removeFavoriteProductAction = (slug: string) => ({
  type: 'FAVORITE/REMOVE_FAVORITE_PRODUCT' as const,
  slug,
})

export const cleanFavoriteAction = () => ({
  type: 'FAVORITE/CLEAN_FAVORITE' as const,
})
