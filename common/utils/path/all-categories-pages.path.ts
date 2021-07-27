import { HeadCategorySlugWithProducts } from 'services/path'
import { PRODUCTS_PER_PAGE } from '../../constans/paginaiton'

export interface CategoryPagesParams extends Record<string, string> {
  category: string
  page: string
}

export interface CategoryPagesPath {
  locale: string
  params: CategoryPagesParams
}

/**
 * Creat path array from Category with products data
 * @param categories
 */
export const getAllCategoriesPagesPath = (
  categories: HeadCategorySlugWithProducts[]
): CategoryPagesPath[] =>
  categories.reduce((res, i) => {
    const category = [
      // create all category locales` array
      { slug: i.slug, locale: i.locale, products: i.products },
      ...i.localizations,
    ]
      .map((i) => ({
        // convert from categories locales` array to page path`s array (temp params pageCount)
        params: {
          category: i.slug,
          pageCount: Math.ceil(i.products.length / PRODUCTS_PER_PAGE),
        },
        locale: i.locale,
      }))
      .reduce((categoryRes, i) => {
        // crete path params` array with page number
        if (i.params.pageCount < 2) return categoryRes
        // remove path with categories has 1 page
        else {
          let pages = []
          for (let j = 2; j <= i.params.pageCount; j++) {
            // generate all pages path
            pages.push({
              locale: i.locale,
              params: {
                category: i.params.category,
                page: String(j),
              },
            })
          }
          return [...categoryRes, ...pages]
        }
      }, [] as CategoryPagesPath[])
    return [...res, ...category]
  }, [] as CategoryPagesPath[])
