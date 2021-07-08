import { CategorySlugData } from '../../services/path'

export type DefaultLocalesParams = Record<string, Record<string, string>>

/**
 * Object with locales query property
 * keys - language key
 * values - object with query params
 */
export type CategoryLocalesParams = Record<
  string,
  {
    category: string
  }
>

/**
 * Create locales query object with categories
 * @param resLocales - response category data with locale
 * @param slug - current category slug
 * @return locales query object with categories
 */
export const getCategoryLocalesParams = (
  resLocales: CategorySlugData,
  slug: string
): CategoryLocalesParams =>
  resLocales.productCategories.reduce((res, i) => {
    if (i.slug === slug || i.localizations.some((i) => i.slug === slug)) {
      res[i.locale] = { category: i.slug }
      i.localizations.forEach((i) => (res[i.locale] = { category: i.slug }))
    }
    return res
  }, {} as CategoryLocalesParams)
