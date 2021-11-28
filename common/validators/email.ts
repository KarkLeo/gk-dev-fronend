import { UserEmail } from 'services/public'
import { emailValidateRequired, reCaptureValidateRequired } from './fields'

//===== constants =====

export const initEmailData: UserEmail = {
  email: '',
  reCapture: '',
} as const

export const initEmailError: Record<keyof UserEmail, false | string> = {
  email: false,
  reCapture: false,
} as const

//===== validate object =====

export type EmailValidateObject = Record<keyof UserEmail, () => string | false>

export const createEmailValidateObject = (
  data: UserEmail
): EmailValidateObject => ({
  email: () => emailValidateRequired(data.email),
  reCapture: () => reCaptureValidateRequired(data.reCapture),
})

//===== checking functions =====

export const checkEmailFields = (data: UserEmail): boolean =>
  Object.keys(initEmailData).reduce(
    (res, key) => res && typeof data[key as keyof UserEmail] === 'string',
    true as boolean
  )

export const checkEmailForm = (data: UserEmail): boolean => {
  const validateObject = createEmailValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserEmail]() === false,
    true as boolean
  )
}
