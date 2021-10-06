import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface ProfileUserData {
  user: UserResponseTypes
}

export interface ProfileUserVars {
  id: string
}

const PROFILE_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      ${USER_QUERY}
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
      fetchPolicy: 'no-cache',
    })
    return res.data ?? undefined
  } catch (e) {
    console.log(e)
  }
}
