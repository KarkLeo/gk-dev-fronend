import { CategorySlugData } from '../../services/path'

export type DefaultLocalesParams = Record<string, Record<string, string>>

export type CategoryLocalesParams = Record<
  string,
  {
    category: string
  }
>

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
