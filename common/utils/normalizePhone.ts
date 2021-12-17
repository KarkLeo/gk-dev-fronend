import { isValidNumberForRegion, parsePhoneNumber } from 'libphonenumber-js'

export const normalizePhoneNumber = (number: string): string =>
  isValidNumberForRegion(number, 'UA')
    ? (parsePhoneNumber(number, 'UA').number as string)
    : isValidNumberForRegion(number, 'RU')
    ? (parsePhoneNumber(number, 'RU').number as string)
    : number
