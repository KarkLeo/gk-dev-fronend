import { UserPassword } from '../../services/public'
import { confirmPasswordValidate, passwordValidate } from './fields'

//===== constants =====

export const initPasswordData: UserPassword = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
} as const

export const initPasswordError: Record<keyof UserPassword, false | string> = {
  oldPassword: false,
  password: false,
  confirmPassword: false,
} as const

//===== validate object =====

export type PasswordValidateObject = Record<
  keyof UserPassword,
  () => string | false
>

export const createPasswordValidateObject = (
  data: UserPassword
): PasswordValidateObject => ({
  oldPassword: () => passwordValidate(data.password),
  password: () => passwordValidate(data.password),
  confirmPassword: () =>
    confirmPasswordValidate(data.confirmPassword, data.password),
})

//===== checking functions =====

export const checkPasswordFields = (data: UserPassword): boolean =>
  Object.keys(initPasswordData).reduce(
    (res, key) => res && typeof data[key as keyof UserPassword] === 'string',
    true as boolean
  )

export const checkPasswordForm = (data: UserPassword): boolean => {
  const validateObject = createPasswordValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserPassword]() === false,
    true as boolean
  )
}
