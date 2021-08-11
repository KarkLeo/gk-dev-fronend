//===== Strapi image =====

import { DefaultImageType } from './default-image.types'

export interface DefaultStrapiImage extends DefaultImageType {}

//===== Strapi Button =====

export interface DefaultStrapiButton {
  text: string
  url: string
}

//===== Product cart =====

export interface ProductCardType {
  id: string
  slug: string
  category: {
    slug: string
  }
  name: string
  vendor_code: string
  price: number
  old_price: number | null
  wholesale_price: number
  photos: DefaultStrapiImage[]
  locale: string
  localizations: {
    locale: string
    slug: string
    name: string
    category: {
      slug: string
    }
  }[]
}
