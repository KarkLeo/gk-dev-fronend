import { UserAddress } from 'services/public'
import {
  addressValidateWithParam,
  nameValidateRequired,
  numberValidateWithParam,
  phoneValidateRequired,
} from './fields'

//===== constants =====

export const initAddressData: UserAddress = {
  first_name: '',
  last_name: '',
  phone_number: '',
  is_novaposhta: false,
  city: '',
  novaposhta_number: '',
  address: '',
  post_code: '',
} as const

export const initAddressError: Record<keyof UserAddress, false | string> = {
  first_name: false,
  last_name: false,
  phone_number: false,
  city: false,
  address: false,
  is_novaposhta: false,
  novaposhta_number: false,
  post_code: false,
} as const

//===== validate object =====

export type AddressValidateObject = Record<
  keyof UserAddress,
  () => string | false
>

export const createAddressValidateObject = (
  data: UserAddress
): AddressValidateObject => ({
  first_name: () => nameValidateRequired(data.first_name),
  last_name: () => nameValidateRequired(data.last_name),
  phone_number: () => phoneValidateRequired(data.phone_number),
  is_novaposhta: () => false,
  city: () => addressValidateWithParam(data.city, data.is_novaposhta),
  novaposhta_number: () =>
    numberValidateWithParam(data.novaposhta_number, data.is_novaposhta),
  address: () => addressValidateWithParam(data.address, !data.is_novaposhta),
  post_code: () => numberValidateWithParam(data.post_code, !data.is_novaposhta),
})

//===== checking functions =====

export const checkAddressFields = (data: UserAddress): boolean =>
  Object.keys(initAddressData).reduce(
    (res, key) =>
      res &&
      (typeof data[key as keyof UserAddress] === 'string' ||
        typeof data[key as keyof UserAddress] === 'boolean'),
    true as boolean
  )

export const checkAddressForm = (data: UserAddress): boolean => {
  const validateObject = createAddressValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserAddress]() === false,
    true as boolean
  )
}

export const createOrderAddressValidateObject = (
  data: UserAddress
): AddressValidateObject => ({
  first_name: () => false,
  last_name: () => false,
  phone_number: () => false,
  is_novaposhta: () => false,
  city: () => false,
  novaposhta_number: () => false,
  address: () => false,
  post_code: () => false,
})

export const checkOrderAddressForm = (data: UserAddress): boolean => {
  const validateObject = createOrderAddressValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserAddress]() === false,
    true as boolean
  )
}
