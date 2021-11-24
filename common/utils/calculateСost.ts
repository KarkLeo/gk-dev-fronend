import { ProductCardType } from 'services/static'
import { CartSettingsTypes, OrderCartInfo } from 'services/private/types'

const calculateCost = (
  cart: Record<string, { product: ProductCardType; count: number }>,
  settings: CartSettingsTypes | null,
  isWholesaler: boolean | null
): OrderCartInfo => {
  const standardTotal = Object.values(cart).reduce(
    (res, i) => res + i.product.price * i.count,
    0
  )

  const isUseWholesalerPrice =
    isWholesaler && settings && standardTotal >= settings.wholesale_limit

  const totalCost = Object.values(cart).reduce(
    (res, i) =>
      res +
      (isUseWholesalerPrice
        ? i.product.wholesale_price || i.product.price
        : i.product.price) *
        i.count,
    0
  )

  const currentDiscountSettings =
    !isWholesaler &&
    settings &&
    settings.discount_settings.find((i) => i.total_cost <= standardTotal)

  const discount = isWholesaler
    ? 0
    : currentDiscountSettings
    ? ((100 - currentDiscountSettings.discount || 0) / 100) * standardTotal
    : 0

  const discountedCost = totalCost - discount

  const wholesalerMessage =
    isWholesaler && !isUseWholesalerPrice
      ? 'Сумма недостаточная для использования оптовых цен'
      : null
  const customerMessage =
    !isWholesaler && currentDiscountSettings
      ? `Приминина скидка ${currentDiscountSettings.discount}%`
      : null

  return {
    cart: Object.values(cart).map((i) => ({
      product: i.product.name,
      count: i.count,
      current_price: isUseWholesalerPrice
        ? i.product.wholesale_price || i.product.price
        : i.product.price,
      vendor_code: i.product.vendor_code,
    })),
    totalCost,
    discount,
    discountedCost,
  }
}
