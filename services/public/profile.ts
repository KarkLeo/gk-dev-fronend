import { UserProfileResponse, UserUpdateRequest } from './types'
import { client } from '../axios-client'

export const profileUpdate = async (
  query: UserUpdateRequest
): Promise<UserProfileResponse> => {
  const res = await client.post<UserProfileResponse>('/profile', {
    ...query,
  })

  return res.data
}
