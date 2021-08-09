import { client } from '../'
import { UserAuthResponse, UserMe } from './types'

export const me = async (user: UserMe): Promise<UserAuthResponse> => {
  const res = await client.post<UserAuthResponse>('/auth/login', {
    ...user,
  })

  return res.data
}
