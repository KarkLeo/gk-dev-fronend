import {
  addressValidate,
  emailValidate,
  nameValidate,
  numberValidate,
  phoneValidateRequired,
  reCaptureValidateRequired,
} from './fields'
import { SimpleOrder } from 'services/public'

//===== constants =====

export const initSimpleOrder: SimpleOrder = {
  first_name: '',
  last_name: '',
  phone_number: '',
  is_novaposhta: false,
  city: '',
  novaposhta_number: '',
  address: '',
  post_code: '',
  email: '',
  reCapture: '',
} as const

export const initSimpleOrderError: Record<keyof SimpleOrder, false | string> = {
  first_name: false,
  last_name: false,
  phone_number: false,
  city: false,
  address: false,
  is_novaposhta: false,
  novaposhta_number: false,
  post_code: false,
  email: false,
  reCapture: false,
} as const

//===== validate object =====

export type SimpleOrderValidateObject = Record<
  keyof SimpleOrder,
  () => string | false
>

export const createSimpleOrderValidateObject = (
  data: SimpleOrder
): SimpleOrderValidateObject => ({
  first_name: () => nameValidate(data.first_name),
  last_name: () => nameValidate(data.last_name),
  phone_number: () => phoneValidateRequired(data.phone_number),
  is_novaposhta: () => false,
  city: () => addressValidate(data.city),
  novaposhta_number: () => numberValidate(data.novaposhta_number),
  address: () => addressValidate(data.address),
  post_code: () => numberValidate(data.post_code),
  email: () => emailValidate(data.email),
  reCapture: () => reCaptureValidateRequired(data.reCapture),
})

//===== checking functions =====

export const checkSimpleOrderFields = (data: SimpleOrder): boolean =>
  Object.keys(initSimpleOrder).reduce(
    (res, key) =>
      res &&
      (typeof data[key as keyof SimpleOrder] === 'string' ||
        typeof data[key as keyof SimpleOrder] === 'boolean'),
    true as boolean
  )

export const checkSimpleOrderForm = (data: SimpleOrder): boolean => {
  const validateObject = createSimpleOrderValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof SimpleOrder]() === false,
    true as boolean
  )
}
