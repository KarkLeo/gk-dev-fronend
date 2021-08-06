import { ValidateType } from './types'
import { UserRegister } from 'services/public'
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
    ? 'Имя должно содержать только буквы'
    : false
