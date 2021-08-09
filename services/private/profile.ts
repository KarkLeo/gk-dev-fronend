import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface ProfileUserData {
  user: {
    id: string
    first_name: string
    last_name: string
    email: string
    phone_number: string
  }
}

export interface ProfileUserVars {
  id: string
}

const PROFILE_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      first_name
      last_name
      email
      phone_number
    }
  }
`

export const profileUser = async (
  variables: ProfileUserVars,
  jwt: string
): Promise<ProfileUserData | undefined> => {
  try {
    const res = await graphql.query<ProfileUserData, ProfileUserVars>({
      query: PROFILE_USER,
      variables,
      context: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    })
    return res.data ?? undefined
  } catch (e) {
    console.log(e)
  }
}
