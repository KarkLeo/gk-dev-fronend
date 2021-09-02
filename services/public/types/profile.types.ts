import { UserResponseTypes } from '../../private/types'

export interface UserProfile {
  first_name: string
  last_name: string
  phone_number: string
  email: string
}

export interface UserPassword {
  oldPassword: string
  password: string
  confirmPassword: string
}

export interface UserProfileResponse {
  user: UserResponseTypes
}

export interface UserUpdateRequest {
  jwt: string
  userID: string
  data: UserProfile
}
