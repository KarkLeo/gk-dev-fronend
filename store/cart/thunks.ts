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
import { cleanCartAction, setOrderModalAction } from './actions'

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
      dispatch(appAuthThunk(res))
      if (isNewAddress) dispatch(createProfileAddressThunk(delivery_info))
      const ordersCount = res.user.orders.length
      if (ordersCount)
        dispatch(
          setOrderModalAction(
            res.user.orders[ordersCount - 1].number,
            res.user.orders[ordersCount - 1].discounted_cost
          )
        )
      else dispatch(cleanCartAction())
    }
  } catch (e) {
    dispatch(appAuthErrorThunk(e))
  }
}
