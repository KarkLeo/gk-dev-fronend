import { ProductCardType } from 'services/static'
import {
  CartSettingsTypes,
  OrderCartInfo,
  OrderCartProduct,
} from 'services/private/types'
import {
  NOT_REACHED_WHOLESALER_LIMIT,
  USED_CUSTOMER_DISCOUNT,
} from 'common/constans/cart-messages'
import { CartMessageInfo } from 'store/cart'

//===== Helpers =====

export const getStandardTotal = (
  cart: Record<string, { product: ProductCardType; count: number }>
): number =>
  Object.values(cart).reduce((res, i) => res + i.product.price * i.count, 0)

export const hasUseWholesalerPrice = (
  standardTotal: number,
  settings: CartSettingsTypes | null,
  isWholesaler: boolean | null
): boolean =>
  Boolean(isWholesaler && settings && standardTotal >= settings.wholesale_limit)

export const getCurrentPrice = (
  isWholesaler: boolean | null,
  product: ProductCardType
): number =>
  isWholesaler ? product.wholesale_price || product.price : product.price

export const getTotalCont = (
  cart: Record<string, { product: ProductCardType; count: number }>,
  isUseWholesalerPrice: boolean
) =>
  Object.values(cart).reduce(
    (res, i) =>
      res + getCurrentPrice(isUseWholesalerPrice, i.product) * i.count,
    0
  )

export const getCurrentDiscountSetting = (
  settings: CartSettingsTypes | null,
  standardTotal: number
) =>
  settings &&
  settings.discount_settings.find((i) => i.total_cost <= standardTotal)

export const getOrderCart = (
  cart: Record<string, { product: ProductCardType; count: number }>,
  isUseWholesalerPrice: boolean
): OrderCartProduct[] =>
  Object.values(cart).map((i) => ({
    product: i.product.name,
    count: i.count,
    current_price: getCurrentPrice(isUseWholesalerPrice, i.product),
    vendor_code: i.product.vendor_code,
  }))

//===== Main method =====

const calculateCost = (
  cart: Record<string, { product: ProductCardType; count: number }>,
  settings: CartSettingsTypes | null,
  isWholesaler: boolean | null
): [OrderCartInfo, CartMessageInfo] => {
  const standardTotal = getStandardTotal(cart)

  const isUseWholesalerPrice = hasUseWholesalerPrice(
    standardTotal,
    settings,
    isWholesaler
  )

  const totalCost = getTotalCont(cart, isUseWholesalerPrice)

  const currentDiscountSettings = getCurrentDiscountSetting(
    settings,
    standardTotal
  )

  const discount = isWholesaler
    ? 0
    : currentDiscountSettings
    ? ((currentDiscountSettings.discount || 0) / 100) * standardTotal
    : 0

  const discountedCost = totalCost - discount

  const wholesalerValue = [(settings && settings.wholesale_limit) || 0]
  const customerValue = currentDiscountSettings
    ? [currentDiscountSettings.total_cost, currentDiscountSettings.discount]
    : [0, 0]

  const message =
    isWholesaler && !isUseWholesalerPrice
      ? NOT_REACHED_WHOLESALER_LIMIT
      : !isWholesaler && currentDiscountSettings
      ? USED_CUSTOMER_DISCOUNT
      : null

  return [
    {
      cart: getOrderCart(cart, isUseWholesalerPrice),
      totalCost,
      discount,
      discountedCost,
    },
    {
      message,
      value: isWholesaler ? wholesalerValue : customerValue,
    },
  ]
}

export default calculateCost
