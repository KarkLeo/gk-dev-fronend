import { CartMessageInfo } from '../../store/cart'
import { useTranslation } from 'next-i18next'
import {
  NOT_REACHED_WHOLESALER_LIMIT,
  USED_CUSTOMER_DISCOUNT,
} from 'common/constans/cart-messages'

const useCartMessage = (messageInfo: CartMessageInfo | null): string | null => {
  const { t } = useTranslation('common')

  if (!messageInfo) return null

  switch (messageInfo.message) {
    case NOT_REACHED_WHOLESALER_LIMIT:
      return t('cart.not_reached_wholesaler_limit').replaceAll(
        '$TOTAL$',
        (messageInfo.value[0] ?? 0).toFixed(0)
      )
    case USED_CUSTOMER_DISCOUNT:
      return t('cart.used_customer_discount')
        .replaceAll('$TOTAL$', (messageInfo.value[0] ?? 0).toFixed(0))
        .replaceAll('$VALUE$', (messageInfo.value[1] ?? 0).toFixed(0))
    default:
      return null
  }
}

export default useCartMessage
