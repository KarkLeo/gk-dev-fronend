import { CategorySlugData, ProductSlugData } from 'services/path'
import { CategoryPagesParams, CategoryParams } from './path'

/**
 * Object with params for one locale
 */
export type DefaultURLParams =
  | {
      category: string
      product: string
    }
  | CategoryPagesParams
  | CategoryParams

/**
 * Object with locales query property
 * keys - language key
 * values - object with default params
 */
export type DefaultLocalesParams = Record<string, DefaultURLParams>

/**
 * Create locales query object with categories
 * @param resLocales - response category data with locale
 * @param params - current category params
 * @return locales query object with categories
 */
export const getCategoryLocalesParams = (
  resLocales: CategorySlugData,
  params: DefaultURLParams
): DefaultLocalesParams =>
  resLocales.productCategories.reduce((res, i) => {
    if (
      i.slug === params.category ||
      i.localizations.some((i) => i.slug === params.category)
    ) {
      res[i.locale] = { ...params, category: i.slug }
      i.localizations.forEach(
        (i) => (res[i.locale] = { ...params, category: i.slug })
      )
    }
    return res
  }, {} as DefaultLocalesParams)

export const getProductLocalesParams = (
  resLocales: ProductSlugData
): DefaultLocalesParams =>
  resLocales.products.reduce((res, i) => {
    res[i.locale] = {
      category: i.category.slug,
      product: i.slug,
    }
    i.localizations.forEach(
      (i) =>
        (res[i.locale] = {
          category: i.category.slug,
          product: i.slug,
        })
    )
    return res
  }, {} as DefaultLocalesParams)
