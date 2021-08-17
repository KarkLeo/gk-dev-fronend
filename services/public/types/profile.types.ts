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

export interface UserAddress {
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string
  novaposhta_number: string
  address: string
}

export interface UserAddressResponse {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string | null
  novaposhta_number: string | null
  address: string | null
}
