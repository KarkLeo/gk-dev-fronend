import { UserProfile } from 'services/public'
import {
  emailValidateRequired,
  nameValidateRequired,
  phoneValidateRequired,
} from './fields'

//===== constants =====

export const initProfileData: UserProfile = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
} as const

export const initProfileError: Record<keyof UserProfile, false | string> = {
  first_name: false,
  last_name: false,
  email: false,
  phone_number: false,
} as const

//===== validate object =====

export type ProfileValidateObject = Record<
  keyof UserProfile,
  () => string | false
>

export const createProfileValidateObject = (
  data: UserProfile
): ProfileValidateObject => ({
  first_name: () => nameValidateRequired(data.first_name),
  last_name: () => nameValidateRequired(data.last_name),
  email: () => emailValidateRequired(data.email),
  phone_number: () => phoneValidateRequired(data.phone_number),
})

//===== checking functions =====

export const checkProfileFields = (data: UserProfile): boolean =>
  Object.keys(initProfileData).reduce(
    (res, key) => res && typeof data[key as keyof UserProfile] === 'string',
    true as boolean
  )

export const checkProfileForm = (data: UserProfile): boolean => {
  const validateObject = createProfileValidateObject(data)

  return Object.keys(validateObject).reduce(
    (res, key) => res && validateObject[key as keyof UserProfile]() === false,
    true as boolean
  )
}
