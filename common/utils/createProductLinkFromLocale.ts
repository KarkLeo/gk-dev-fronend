import { ProductCardType } from 'services/static'

export interface ProductLinkType {
  name: string
  query: {
    category: string
    product: string
  }
}

/**
 * Create object to product link in favorite or cart
 * @param product
 * @param lang
 */
const createProductLinkFromLocale = (
  product: ProductCardType,
  lang: string
): ProductLinkType | null => {
  if (product.locale === lang)
    return {
      name: product.name,
      query: {
        category: product.category.slug,
        product: product.slug,
      },
    }
  const localProduct = product.localizations.find((i) => i.locale === lang)

  if (localProduct)
    return {
      name: localProduct.name,
      query: {
        category: localProduct.category.slug,
        product: localProduct.slug,
      },
    }

  return null
}

export default createProductLinkFromLocale
