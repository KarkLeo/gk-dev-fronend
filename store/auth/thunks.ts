import { AppThunk } from '../types'
import { UserRegister } from 'services/public'
import { publicServices } from 'services'

export const registerThunk =
  (user: UserRegister): AppThunk =>
  async () => {
    const res = await publicServices.register(user)
    console.log(res)
  }
