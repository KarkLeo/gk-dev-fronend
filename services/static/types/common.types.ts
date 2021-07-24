//===== Strapi image =====

export interface DefaultStrapiImage {
  url: string
}

//===== Strapi Button =====

export interface DefaultStrapiButton {
  text: string
  url: string
}

//===== Product cart =====

export interface ProductCard {
  name: string
  vendor_code: string
  price: number
  old_price: number
  wholesale_price: number
  photos: DefaultStrapiImage[]
}
