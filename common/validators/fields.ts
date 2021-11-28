import { ValidateType } from './types'
import validator from 'validator'

//===== Constants from i18n =====
const NOT_EMPTY = 'not_empty'
const FROM_3_TO_12 = 'from_3_to_12'
const FROM_6_TO_20 = 'from_6_to_20'
const FROM_5_TO_64 = 'from_5_to_64'
const ONE_LANGUAGE_NAME = 'one_language_name'
const PASSWORD_RULE = 'password_rule'
const PASSWORD_MISMATCH = 'password_mismatch'
const INVALID_EMAIL = 'invalid_email'
const INVALID_PHONE_NUMBER = 'invalid_phone_number'
const INVALID_NUMBER = 'invalid_number'

export const nameValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isLength(str, {
        min: 3,
        max: 12,
      })
    ? FROM_3_TO_12
    : !(
        validator.isAlpha(str, 'uk-UA') ||
        validator.isAlpha(str, 'ru-RU') ||
        validator.isAlpha(str, 'en-US')
      )
    ? ONE_LANGUAGE_NAME
    : false

export const nameValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? false
    : !validator.isLength(str, {
        min: 3,
        max: 12,
      })
    ? FROM_3_TO_12
    : !(
        validator.isAlpha(str, 'uk-UA') ||
        validator.isAlpha(str, 'ru-RU') ||
        validator.isAlpha(str, 'en-US')
      )
    ? ONE_LANGUAGE_NAME
    : false

export const passwordValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isLength(str, {
        min: 6,
        max: 20,
      })
    ? FROM_6_TO_20
    : !validator.isStrongPassword(str, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      })
    ? PASSWORD_RULE
    : false

export const passwordSimpleValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isLength(str, {
        min: 6,
        max: 20,
      })
    ? FROM_6_TO_20
    : false

export const confirmPasswordValidateRequired = (
  str: string,
  password: string
): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : str !== password
    ? PASSWORD_MISMATCH
    : false

export const emailValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isEmail(str)
    ? INVALID_EMAIL
    : false

export const emailValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? false
    : !validator.isEmail(str)
    ? INVALID_EMAIL
    : false

export const phoneValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isMobilePhone(str)
    ? INVALID_PHONE_NUMBER
    : false

export const reCaptureValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str) ? NOT_EMPTY : false

export const addressValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isLength(str, {
        min: 5,
        max: 64,
      })
    ? FROM_5_TO_64
    : false

export const addressValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? false
    : !validator.isLength(str, {
        min: 5,
        max: 64,
      })
    ? FROM_5_TO_64
    : false

export const addressValidateWithParam = (
  str: string,
  param: boolean
): ValidateType => param && addressValidateRequired(str)

export const numberValidateRequired = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? NOT_EMPTY
    : !validator.isInt(str, { min: 1 })
    ? INVALID_NUMBER
    : false

export const numberValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? false
    : !validator.isInt(str, { min: 1 })
    ? INVALID_NUMBER
    : false

export const numberValidateWithParam = (
  str: string,
  param: boolean
): ValidateType => param && numberValidateRequired(str)

export const simpleValidate = (str: string): ValidateType => false
