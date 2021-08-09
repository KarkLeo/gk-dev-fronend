import { client } from '../'
import { UserAuthResponse, UserLogin } from './types'

export const login = async (user: UserLogin): Promise<UserAuthResponse> => {
  const res = await client.post<UserAuthResponse>('/auth/login', {
    ...user,
  })

  return res.data
}
