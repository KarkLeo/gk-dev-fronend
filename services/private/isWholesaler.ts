import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface IsWholesalerData {
  user: {
    is_wholesaler: boolean
  }
}

export interface IsWholesalerVars {
  id: string
}

const IS_WHOLESALER = gql`
  query ($id: ID!) {
    user(id: $id) {
      is_wholesaler
    }
  }
`

export const isWholesaler = async (
  variables: IsWholesalerVars,
  jwt: string
): Promise<IsWholesalerData | undefined> => {
  try {
    const res = await graphql.query<IsWholesalerData, IsWholesalerVars>({
      query: IS_WHOLESALER,
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
