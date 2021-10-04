import { GetPrivateBankCurrencyData } from '../../services/private'

const convertCurrency = (
  data: GetPrivateBankCurrencyData
): Record<string, number> =>
  data.reduce(
    (res, i) => ({ ...res, [i.ccy]: Number(i.sale) }),
    {} as Record<string, number>
  )

export default convertCurrency
