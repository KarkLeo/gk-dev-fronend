import { client } from '../'
import { UserFavoritesUpdateRequest, UserProfileResponse } from './types'

export const favoritesUpdate = async (
  query: UserFavoritesUpdateRequest
): Promise<UserProfileResponse> => {
  const res = await client.post<UserProfileResponse>('/profile/favorites', {
    ...query,
  })

  return res.data
}
