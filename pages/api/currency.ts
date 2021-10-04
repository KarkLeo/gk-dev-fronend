import { NextApiRequest, NextApiResponse } from 'next'
import {
  getCurrency,
  getPrivateBankCurrency,
  setCurrency,
} from 'services/private'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const savedData = await getCurrency()
  let currency = savedData ? savedData.currencySetting.data : null
  const today = new Date().toISOString().split('T')[0]

  if (savedData?.currencySetting.last_update !== today) {
    const newCurrency = await getPrivateBankCurrency()
    const updateData = await setCurrency({
      last_update: today,
      data: JSON.stringify(newCurrency),
    })

    currency = updateData?.currencySetting.data
  }

  return res.status(200).json(currency)
}
