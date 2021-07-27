export interface PhoneListItem {
  id: string
  label: string
  phone_number: string
}

export interface EmailListItem {
  id: string
  label: string
  email: string
}

export interface SocialListItem {
  id: string
  name: string
  url: string
  icon:
    | 'email'
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'pinterest'
    | 'telegram'
    | 'tiktok'
    | 'twitter'
    | 'viber'
    | 'whatsapp'
    | 'youtube'
}

export interface CategoryListItem {
  id: string
  name: string
  slug: string
}

export interface AddressListItem {
  id: string
  address: string
  coordinates: string
}
