import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'
import { USER_QUERY } from './query'
import { UserResponseTypes } from './types'

export interface UpdateUserFavoritesData {
  updateUser: {
    user: UserResponseTypes
  }
}

export interface UpdateUserFavoritesVars {
  favorites: string[]
  id: string
}

const UPDATE_USER_FAVORITES = gql`
  mutation ($id: ID!, $favorites: [ID]) {
    updateUser(
      input: { where: { id: $id }, data: { favorites: $favorites } }
    ) {
      user {
        ${USER_QUERY}
      }
    }
  }
`

export const updateUserFavorites = async (
  variables: UpdateUserFavoritesVars,
  jwt: string
): Promise<UpdateUserFavoritesData | undefined> => {
  try {
    const res = await graphql.mutate<
      UpdateUserFavoritesData,
      UpdateUserFavoritesVars
    >({
      mutation: UPDATE_USER_FAVORITES,
      context: {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
      variables,
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
