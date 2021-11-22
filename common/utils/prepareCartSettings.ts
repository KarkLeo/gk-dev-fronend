import { CartSettingsTypes } from 'services/private/types'

const prepareCartSettings = (data: CartSettingsTypes): CartSettingsTypes => ({
  ...data,
  discount_settings: data.discount_settings.sort(
    (a, b) => b.total_cost - a.total_cost
  ),
})

export default prepareCartSettings
