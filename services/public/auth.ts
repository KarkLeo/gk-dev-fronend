import { client } from '../'
import { UserRegister } from './types'

export const register = async (user: UserRegister): Promise<string> => {
  const res = await client.post<string>('/auth/register', {
    ...user,
  })

  return res.data
}
