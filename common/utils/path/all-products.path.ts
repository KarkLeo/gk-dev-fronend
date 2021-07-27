import { HeadCategorySlugWithProducts } from '../../../services/path'

export interface ProductParams extends Record<string, string> {
  category: string
  product: string
}

export interface ProductPath {
  locale: string
  params: ProductParams
}

/**
 * Create path array from Categories with Products to Products page
 * @param categories
 */
export const getAllProductsPath = (
  categories: HeadCategorySlugWithProducts[]
): ProductPath[] =>
  categories.reduce((res, i) => {
    const products = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale, products: i.products },
      ...i.localizations,
    ].reduce((productsRes, i) => {
      // create products array and converts to page path
      const pages: ProductPath[] = i.products.map((product) => ({
        locale: i.locale,
        params: {
          category: i.slug,
          product: product.slug,
        },
      }))

      return [...productsRes, ...pages]
    }, [] as ProductPath[])
    return [...res, ...products]
  }, [] as ProductPath[])
