import { HeadCategorySlug } from 'services/path'

export interface CategoryParams extends Record<string, string> {
  category: string
}

export interface CategoryPath {
  locale: string
  params: CategoryParams
}

/**
 * Create path array from Category data
 * @param categories
 */
export const getAllCategoryPath = (
  categories: HeadCategorySlug[]
): CategoryPath[] =>
  categories.reduce((res, i) => {
    const category = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale },
      ...i.localizations,
    ].map((i) => ({ params: { category: i.slug }, locale: i.locale }))

    return [...res, ...category]
  }, [] as CategoryPath[])
