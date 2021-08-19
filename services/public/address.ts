import { client } from '../'
import { UserAddressUpdateRequest, UserProfileResponse } from './types'

export const addressUpdate = async (
  query: UserAddressUpdateRequest
): Promise<UserProfileResponse> => {
  const res = await client.post<UserProfileResponse>('/profile/address', {
    ...query,
  })

  return res.data
}
