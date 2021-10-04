import { client } from '../axios-client'
import { GetPrivateBankCurrencyData } from '../private'

export const currency =
  async (): Promise<GetPrivateBankCurrencyData | null> => {
    const res = await client.get<GetPrivateBankCurrencyData | null>('/currency')

    return res.data
  }
