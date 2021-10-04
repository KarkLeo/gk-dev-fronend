import { client } from '../axios-client'

const GET_PRIVATE_BANK_CURRENCY =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

export interface PBCurrencyItem {
  ccy: string
  base_ccy: string
  buy: string
  sale: string
}

export type GetPrivateBankCurrencyData = PBCurrencyItem[]

export const getPrivateBankCurrency = async (): Promise<
  GetPrivateBankCurrencyData | undefined
> => {
  try {
    const res = await client.get<GetPrivateBankCurrencyData>(
      GET_PRIVATE_BANK_CURRENCY
    )
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
