import { gql } from '@apollo/client'
import client from '../apollo-client'

export interface PhoneListItem {
  id: string
  label: string
  phone_number: string
}

export interface ContactsSettingsData {
  contactSetting: {
    list_of_numbers: PhoneListItem[]
  }
}

export interface ContactSettingsVars {
  lang: string
}

const GET_CONTACT_SETTINGS = gql`
  query ($lang: String!) {
    contactSetting(locale: $lang) {
      list_of_numbers {
        id
        label
        phone_number
      }
    }
  }
`

export const getContactSettings = async (
  variables: ContactSettingsVars
): Promise<ContactsSettingsData> => {
  const res = await client.query<ContactsSettingsData, ContactSettingsVars>({
    query: GET_CONTACT_SETTINGS,
    variables,
  })
  return res.data
}
