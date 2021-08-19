export interface UserAddress {
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string
  novaposhta_number: string
  address: string
}

export interface UserAddressEdit {
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string | null
  novaposhta_number: number | null
  address: string | null
}

export interface UserAddressResponse {
  id: string
  first_name: string
  last_name: string
  phone_number: string
  is_novaposhta: boolean
  city: string | null
  novaposhta_number: number | null
  address: string | null
}

export interface UserAddressUpdateRequest {
  jwt: string
  userID: string
  address: UserAddressEdit[]
}
