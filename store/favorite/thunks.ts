import { AppThunk } from '../types'
import { ProductCardType } from 'services/static'
import {
  addFavoriteProductAction,
  removeFavoriteProductAction,
} from './actions'
import {
  appAuthErrorThunk,
  appAuthThunk,
  getIsAuthSelector,
  getUserIDSelector,
} from '../auth'
import { getJwt } from 'common/jwtService'
import { getFavoriteProductsId } from './selectors'
import { publicServices } from 'services'

export const sendFavoriteThunk = (): AppThunk => async (dispatch, getState) => {
  try {
    const userID = getUserIDSelector(getState())
    const favorites = getFavoriteProductsId(getState())
    const token = getJwt()
    if (token && userID && favorites) {
      const res = await publicServices.favoritesUpdate({
        jwt: token,
        userID,
        favorites,
      })
      dispatch(appAuthThunk(res))
    }
  } catch (e) {
    dispatch(appAuthErrorThunk(e))
  }
}

export const addFavoriteProductThunk =
  (product: ProductCardType): AppThunk =>
  (dispatch, getState) => {
    dispatch(addFavoriteProductAction(product))
    const isAuth = getIsAuthSelector(getState())
    if (isAuth) dispatch(sendFavoriteThunk())
  }

export const removeFavoriteProductThunk =
  (code: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(removeFavoriteProductAction(code))
    const isAuth = getIsAuthSelector(getState())
    if (isAuth) dispatch(sendFavoriteThunk())
  }
