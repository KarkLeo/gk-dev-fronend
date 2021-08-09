import { client } from '../'
import { UserAuthResponse, UserRegister } from './types'

export const register = async (
  user: UserRegister
): Promise<UserAuthResponse> => {
  const res = await client.post<UserAuthResponse>('/auth/register', {
    ...user,
  })

  return res.data
}
