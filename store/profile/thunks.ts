import { AppThunk } from '../types'
import { appAuthErrorThunk, appAuthThunk, getUserIDSelector } from '../auth'
import { getProfileAddressSelector, getProfileEmailSelector } from './selectors'
import { publicServices } from 'services'
import { getJwt } from 'common/jwtService'
import { UserAddress, UserPassword, UserProfile } from 'services/public'

export const deleteProfileAddressThunk =
  (addressID: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userID = getUserIDSelector(getState())
      const address = getProfileAddressSelector(getState())
      const token = getJwt()
      if (token && userID && address) {
        const res = await publicServices.addressUpdate({
          jwt: token,
          userID: userID,
          address: address
            .filter((i) => i.id !== addressID)
            .map((i) => ({
              first_name: i.first_name,
              last_name: i.last_name,
              phone_number: i.phone_number,
              is_novaposhta: i.is_novaposhta,
              novaposhta_number: i.novaposhta_number,
              address: i.address,
              city: i.city,
              post_code: i.post_code,
            })),
        })
        dispatch(appAuthThunk(res))
      }
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }
export const editProfileAddressThunk =
  (addressID: string, data: UserAddress): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userID = getUserIDSelector(getState())
      const address = getProfileAddressSelector(getState())
      const token = getJwt()
      if (token && userID && address) {
        const res = await publicServices.addressUpdate({
          jwt: token,
          userID: userID,
          address: address.map((i) =>
            i.id === addressID
              ? {
                  first_name: data.first_name,
                  last_name: data.last_name,
                  phone_number: data.phone_number,
                  is_novaposhta: data.is_novaposhta,
                  novaposhta_number:
                    data.novaposhta_number === ''
                      ? null
                      : parseInt(data.novaposhta_number),
                  address: data.address,
                  city: data.city,
                  post_code: data.post_code,
                }
              : {
                  first_name: i.first_name,
                  last_name: i.last_name,
                  phone_number: i.phone_number,
                  is_novaposhta: i.is_novaposhta,
                  novaposhta_number: i.novaposhta_number,
                  address: i.address,
                  city: i.city,
                  post_code: i.post_code,
                }
          ),
        })
        dispatch(appAuthThunk(res))
      }
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const createProfileAddressThunk =
  (data: UserAddress): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userID = getUserIDSelector(getState())
      const address = getProfileAddressSelector(getState())
      const token = getJwt()

      if (token && userID && address) {
        const res = await publicServices.addressUpdate({
          jwt: token,
          userID: userID,
          address: [
            ...address.map((i) => ({
              first_name: i.first_name,
              last_name: i.last_name,
              phone_number: i.phone_number,
              is_novaposhta: i.is_novaposhta,
              novaposhta_number: i.novaposhta_number,
              address: i.address,
              city: i.city,
              post_code: i.post_code,
            })),
            {
              first_name: data.first_name,
              last_name: data.last_name,
              phone_number: data.phone_number,
              is_novaposhta: data.is_novaposhta,
              novaposhta_number:
                data.novaposhta_number === ''
                  ? null
                  : parseInt(data.novaposhta_number),
              address: data.address,
              city: data.city,
              post_code: data.post_code,
            },
          ],
        })
        dispatch(appAuthThunk(res))
      }
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const updateProfileThunk =
  (data: UserProfile): AppThunk =>
  async (dispatch, getState) => {
    try {
      const userID = getUserIDSelector(getState())
      const token = getJwt()

      if (token && userID) {
        const res = await publicServices.profileUpdate({
          jwt: token,
          userID: userID,
          data,
        })
        dispatch(appAuthThunk(res))
      }
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const updatePasswordThunk =
  (data: UserPassword): AppThunk =>
  async (dispatch, getState) => {
    try {
      const email = getProfileEmailSelector(getState())

      if (email) {
        const res = await publicServices.passwordUpdate({
          email,
          passwords: data,
        })
        dispatch(appAuthThunk(res))
      }
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }
