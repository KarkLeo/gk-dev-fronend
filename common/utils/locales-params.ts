import { CategorySlugData } from 'services/path'

export type DefaultLocalesParams = Record<string, Record<string, string>>

/**
 * Object with params for one locale
 */
export type CategoryURLParams =
  | {
      category: string
      page: string
    }
  | {
      category: string
    }

/**
 * Object with locales query property
 * keys - language key
 * values - object with category slug
 */
export type CategoryLocalesParams = Record<string, CategoryURLParams>

/**
 * Create locales query object with categories
 * @param resLocales - response category data with locale
 * @param params - current category params
 * @return locales query object with categories
 */
export const getCategoryLocalesParams = (
  resLocales: CategorySlugData,
  params: CategoryURLParams
): CategoryLocalesParams =>
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
  }, {} as CategoryLocalesParams)

/**
 * Object with locales query property
 * keys - language key
 * values - object with category slug and page number
 */
export type CategoryLocalesWithPageParams = Record<
  string,
  {
    category: string
    page: number
  }
>
