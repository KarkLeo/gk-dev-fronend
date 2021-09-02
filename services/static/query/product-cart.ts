export const PRODUCT_CART_QUERY = `
  id
  slug
  category {
    slug
  }
  name
  vendor_code
  price
  old_price
  wholesale_price
  photos {
    url
    formats
  }
  locale
  localizations {
    locale
    slug
    name
    category {
      slug
    }
  }
`

export const PRODUCT_CART_SHOT_QUERY = `
  id
  slug
  name
  category {
    slug
  }
  photos {
    url
    formats
  }
  locale
  localizations {
    locale
    slug
    name
    category {
      slug
    }
  }
`
