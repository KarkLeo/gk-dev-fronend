import { UserRegister } from 'services/public'
import {
  confirmPasswordValidateRequired,
  emailValidateRequired,
  nameValidateRequired,
  passwordSimpleValidateRequired,
  phoneValidateRequired,
  reCaptureValidateRequired,
} from './fields'

//===== constants =====

export const initRegisterData: UserRegister = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone_number: '',
  reCapture: '',
} as const

export const initRegisterError: Record<keyof UserRegister, false | string> = {
  first_name: false,
  last_name: false,
  email: false,
  password: false,
  confirmPassword: false,
  phone_number: false,
  reCapture: false,
} as const

//===== validate object =====

export type RegisterValidateObject = Record<
  keyof UserRegister,
  () => string | false
>

export const createRegisterValidateObject = (
  data: UserRegister
): RegisterValidateObject => ({
  first_name: () => nameValidateRequired(data.first_name),
  last_name: () => nameValidateRequired(data.last_name),
  email: () => emailValidateRequired(data.email),
  password: () => passwordSimpleValidateRequired(data.password),
  confirmPassword: () =>
    confirmPasswordValidateRequired(data.confirmPassword, data.password),
  phone_number: () => phoneValidateRequired(data.phone_number),
  reCapture: () => reCaptureValidateRequired(data.reCapture),
})

//===== checking functions =====

export const checkRegisterFields = (data: UserRegister): boolean =>
  Object.keys(initRegisterData).reduce(
    (res, key) => res && typeof data[key as keyof UserRegister] === 'string',
    true as boolean
  )

export const checkRegisterForm = (data: UserRegister): boolean => {
  const validateObject = createRegisterValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserRegister]() === false,
    true as boolean
  )
}
