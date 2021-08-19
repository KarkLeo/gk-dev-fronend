import { ValidateType } from './types'
import validator from 'validator'

export const nameValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не должно быть пустым'
    : !validator.isLength(str, {
        min: 3,
        max: 12,
      })
    ? 'Поле должно быть от 3 до 12 символов'
    : !(
        validator.isAlpha(str, 'uk-UA') ||
        validator.isAlpha(str, 'ru-RU') ||
        validator.isAlpha(str, 'en-US')
      )
    ? 'Имя должно содержать только буквы на одном языке'
    : false

export const passwordValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не может быть пустым'
    : !validator.isLength(str, {
        min: 6,
        max: 20,
      })
    ? 'Поле должно быть от 6 до 20 символов'
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
    ? 'Пароль должен быть денее 6 символов, при этом минимум 1 большая буква, 1 маленькая, 1 цифра и символ'
    : false

export const passwordSimpleValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не может быть пустым'
    : !validator.isLength(str, {
        min: 6,
        max: 20,
      })
    ? 'Поле должно быть от 6 до 20 символов'
    : false

export const confirmPasswordValidate = (
  str: string,
  password: string
): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не может быть пустым'
    : str !== password
    ? 'пароли не совпадают'
    : false

export const emailValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не должно быть пустым'
    : !validator.isEmail(str)
    ? 'некорректный емаил'
    : false

export const phoneValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не должно быть пустым'
    : !validator.isMobilePhone(str)
    ? 'некорректный телефон'
    : false

export const reCaptureValidate = (str: string): ValidateType =>
  validator.isEmpty(str) ? 'Поле не должно быть пустым' : false

export const addressValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не должно быть пустым'
    : !validator.isLength(str, {
        min: 5,
        max: 64,
      })
    ? 'Поле должно быть от 5 до 64 символов'
    : false

export const addressValidateWithParam = (
  str: string,
  param: boolean
): ValidateType => param && addressValidate(str)

export const numberValidate = (str: string): ValidateType =>
  validator.isEmpty(str)
    ? 'Поле не должно быть пустым'
    : !validator.isInt(str, { min: 1 })
    ? 'некорректный номер'
    : false

export const numberValidateWithParam = (
  str: string,
  param: boolean
): ValidateType => param && numberValidate(str)
