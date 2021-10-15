import { AppState } from '../types'
import {
  UserAddress,
  UserAddressResponse,
  UserProfile,
} from '../../services/public'

export const getProfileInitialsSelector = (state: AppState): string | null => {
  const isAuth = state.auth.isAuth
  const firstName = state.profile.first_name
  const lastName = state.profile.last_name

  if (isAuth && firstName.length && lastName.length)
    return (firstName[0] + lastName[0]).toLocaleUpperCase()
  return null
}

export const getInitProfileFormSelector = (state: AppState): UserProfile => ({
  first_name: state.profile.first_name,
  last_name: state.profile.last_name,
  email: state.profile.email,
  phone_number: state.profile.phone_number,
})
export const getInitProfileAddressSelector = (
  state: AppState
): UserAddress => ({
  first_name: state.profile.first_name,
  last_name: state.profile.last_name,
  phone_number: state.profile.phone_number,
  is_novaposhta: false,
  novaposhta_number: '',
  city: '',
  address: '',
  post_code: '',
})

export const getProfileAddressSelector = (
  state: AppState
): UserAddressResponse[] | null => state.profile.delivery_info

export const getProfileEmailSelector = (state: AppState) => state.profile.email

export const getProfileOrdersSelector = (state: AppState) =>
  state.profile.orders
