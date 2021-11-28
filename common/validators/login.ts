import { UserLogin } from 'services/public'
import {
  emailValidateRequired,
  passwordSimpleValidateRequired,
  reCaptureValidateRequired,
} from './fields'

//===== constants =====

export const initLoginData: UserLogin = {
  email: '',
  password: '',
  reCapture: '',
} as const

export const initLoginError: Record<keyof UserLogin, false | string> = {
  email: false,
  password: false,
  reCapture: false,
} as const

//===== validate object =====

export type LoginValidateObject = Record<keyof UserLogin, () => string | false>

export const createLoginValidateObject = (
  data: UserLogin
): LoginValidateObject => ({
  email: () => emailValidateRequired(data.email),
  password: () => passwordSimpleValidateRequired(data.password),
  reCapture: () => reCaptureValidateRequired(data.reCapture),
})

//===== checking functions =====

export const checkLoginFields = (data: UserLogin): boolean =>
  Object.keys(initLoginData).reduce(
    (res, key) => res && typeof data[key as keyof UserLogin] === 'string',
    true as boolean
  )

export const checkLoginForm = (data: UserLogin): boolean => {
  const validateObject = createLoginValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserLogin]() === false,
    true as boolean
  )
}
