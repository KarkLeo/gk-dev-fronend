import { client } from '../'
import { UserPasswordRequest, UserProfileResponse } from './types'

export const passwordUpdate = async (
  query: UserPasswordRequest
): Promise<UserProfileResponse> => {
  const res = await client.post<UserProfileResponse>('/profile/password', {
    ...query,
  })

  return res.data
}
