import { gql } from '@apollo/client'
import { graphql } from '../'
import {
  AddressListItem,
  CategoryListItem,
  EmailListItem,
  PhoneListItem,
  SocialListItem,
} from './types/contact-settings.types'

export interface MetaData {
  contactSetting: {
    list_of_numbers: PhoneListItem[]
    list_of_emails: EmailListItem[]
    list_of_links: SocialListItem[]
    list_of_addresses: AddressListItem[]
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
      list_of_emails {
        id
        label
        email
      }
      list_of_links {
        id
        icon
        name
        url
      }
      list_of_addresses {
        id
        address
        coordinates
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
  const res = await graphql.query<MetaData, MetaVars>({
    query: GET_META,
    variables,
  })
  return res.data
}
