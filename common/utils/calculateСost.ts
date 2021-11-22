import { ProductCardType } from 'services/static'
import { CartSettingsTypes, OrderCartInfo } from 'services/private/types'

const calculateCost = (
  cart: Record<string, { product: ProductCardType; count: number }>,
  settings: CartSettingsTypes | null,
  isWholesaler: boolean | null
): OrderCartInfo => {
  return {
    cart: [],
    totalCost: 0,
    discount: 0,
    discountedCost: 0,
  }
}
