import { NextApiRequest, NextApiResponse } from 'next'
import { getCartSettings } from 'services/private'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const cartSettings = await getCartSettings()

  return res.status(200).json(cartSettings)
}
