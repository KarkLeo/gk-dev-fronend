import { UserAddressResponse } from './profile.types'

export interface UserRegister {
  first_name: string
  last_name: string
  phone_number: string
  email: string
  password: string
  confirmPassword: string
  reCapture: string
}
export interface UserLogin {
  email: string
  password: string
  reCapture: string
}

export interface UserMe {
  jwt: string
}

export interface UserAuthResponse {
  jwt: string
  user: {
    id: string
    first_name: string
    last_name: string
    phone_number: string
    email: string
    delivery_info: UserAddressResponse[] | null
  }
}
