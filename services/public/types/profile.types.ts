import { UserAddressResponse } from './address.types'

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
  user: {
    id: string
    first_name: string
    last_name: string
    phone_number: string
    email: string
    delivery_info: UserAddressResponse[] | null
  }
}

export interface UserUpdateRequest {
  jwt: string
  userID: string
  data: UserProfile
}
