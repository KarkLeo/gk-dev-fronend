import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface MeUserData {
  me: {
    id: string
  }
}

export interface MeUserVars {}

const ME_USER = gql`
  query {
    me {
      id
    }
  }
`

export const meUser = async (
  variables: MeUserVars,
  jwt: string
): Promise<MeUserData | undefined> => {
  try {
    const res = await graphql.query<MeUserData, MeUserVars>({
      query: ME_USER,
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
