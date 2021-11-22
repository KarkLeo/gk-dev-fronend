import { client } from '../axios-client'
import { CartSettingsData } from '../private'

export const cartSettings = async (): Promise<CartSettingsData | null> => {
  const res = await client.get<CartSettingsData | null>('/cart-settings')

  return res.data
}
