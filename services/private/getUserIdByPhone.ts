import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface UserIdByPhoneData {
  users: {
    id: string
    is_wholesaler: boolean
  }[]
}

export interface UserIdByPhoneVars {
  phone: string
}

const GET_USER_ID_BY_PHONE = gql`
  query ($phone: String!) {
    users(where: { phone_number_contains: $phone }) {
      id
      is_wholesaler
    }
  }
`
export const getUserIdByPhone = async (
  variables: UserIdByPhoneVars
): Promise<UserIdByPhoneData | undefined> => {
  try {
    const res = await graphql.query<UserIdByPhoneData, UserIdByPhoneVars>({
      query: GET_USER_ID_BY_PHONE,
      variables,
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
