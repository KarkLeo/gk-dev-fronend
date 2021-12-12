import { AppThunk } from '../types'
import { appAuthErrorThunk, appAuthThunk, getUserIDSelector } from '../auth'
import { createProfileAddressThunk } from '../profile'
import { getJwt } from 'common/jwtService'
import {
  getOrderCartSelector,
  getOrderDeliverAddressSelector,
  getOrderDescriptionSelector,
  isNewOrderAddressSelector,
} from './selectors'
import { publicServices } from 'services'
import { setCartSettings, setOrderModalAction } from './actions'
import prepareCartSettings from 'common/utils/prepareCartSettings'
import { SimpleOrderFormType } from 'services/public'

export const checkoutThunk = (): AppThunk => async (dispatch, getState) => {
  try {
    const userID = getUserIDSelector(getState())
    const token = getJwt()
    const delivery_info = getOrderDeliverAddressSelector(getState())
    const cart_items = getOrderCartSelector(getState())
    const description = getOrderDescriptionSelector(getState())

    const isNewAddress = isNewOrderAddressSelector(getState())

    if (userID && token && delivery_info && cart_items) {
      const res = await publicServices.orders({
        jwt: token,
        userID,
        delivery_info,
        cart_items,
        description,
      })

      const user = {
        jwt: res.jwt,
        user: res.user,
      }

      const modal = {
        number: res.number,
        cart: res.cart,
        message: res.message,
      }

      dispatch(appAuthThunk(user))

      // todo Need create check function
      if (isNewAddress) dispatch(createProfileAddressThunk(delivery_info))

      dispatch(setOrderModalAction(modal))
    }
  } catch (e) {
    dispatch(appAuthErrorThunk(e))
  }
}

export const checkoutSimpleThunk =
  (form: SimpleOrderFormType): AppThunk =>
  async (dispatch, getState) => {
    try {
      const cart_items = getOrderCartSelector(getState())

      const res = await publicServices.simpleOrders({
        cart_items,
        ...form,
      })

      const modal = {
        number: res.number,
        cart: res.cart,
        message: res.message,
      }

      dispatch(setOrderModalAction(modal))
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const fetchCartSettingsThunk = (): AppThunk => async (dispatch) => {
  try {
    const res = await publicServices.cartSettings()
    res && dispatch(setCartSettings(prepareCartSettings(res.cartSetting)))
  } catch (e) {
    console.log(e)
  }
}
