import { UserPassword } from './profile.types'

export interface UserPasswordRequest {
  email: string
  passwords: UserPassword
}
