import { gql } from '@apollo/client'
import client from '../apollo-client'

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

export interface MetaData {
  contactSetting: {
    list_of_numbers: PhoneListItem[]
  }
  productCategories: CategoryListItem[]
}

export interface MetaVars {
  lang: string
}

const GET_META = gql`
  query ($lang: String!) {
    contactSetting(locale: $lang) {
      list_of_numbers {
        id
        label
        phone_number
      }
    }
    productCategories(sort: "order", locale: $lang) {
      id
      name
      slug
    }
  }
`

export const getMeta = async (variables: MetaVars): Promise<MetaData> => {
  const res = await client.query<MetaData, MetaVars>({
    query: GET_META,
    variables,
  })
  return res.data
}
