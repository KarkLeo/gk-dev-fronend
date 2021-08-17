import { AppThunk } from '../types'
import { UserAuthResponse, UserLogin, UserRegister } from 'services/public'
import { publicServices } from 'services'
import { removeJwt, setJwt, getJwt } from 'common/jwtService'
import { cleanAuthAction, completedTestAction, setAuthAction } from './actions'
import { closeModalAction, ERROR_CODE, setErrorModalAction } from '../modal'
import { setProfileAction } from '../profile'
import { getIsTestedSelector } from './selectors'

export const appAuthThunk =
  (auth: UserAuthResponse): AppThunk =>
  (dispatch) => {
    setJwt(auth.jwt)
    dispatch(setAuthAction(auth.user.id))
    dispatch(
      setProfileAction({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        phone_number: auth.user.phone_number,
        email: auth.user.email,
        delivery_info: auth.user.delivery_info,
      })
    )
    dispatch(closeModalAction())
  }

export const appAuthErrorThunk =
  (e: any): AppThunk =>
  (dispatch) => {
    const error = e?.response?.data?.error
    if (error && ERROR_CODE.includes(error)) {
      dispatch(setErrorModalAction(error))
    } else {
      dispatch(setErrorModalAction('SOME_ERROR'))
    }
    dispatch(cleanAuthAction())
    dispatch(completedTestAction())
    removeJwt()
  }

export const registerThunk =
  (user: UserRegister): AppThunk =>
  async (dispatch) => {
    try {
      const res = await publicServices.register(user)
      dispatch(appAuthThunk(res))
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const loginThunk =
  (user: UserLogin): AppThunk =>
  async (dispatch) => {
    try {
      const res = await publicServices.login(user)
      dispatch(appAuthThunk(res))
    } catch (e) {
      dispatch(appAuthErrorThunk(e))
    }
  }

export const meThunk = (): AppThunk => async (dispatch, getState) => {
  try {
    const token = getJwt()
    const isTesting = getIsTestedSelector(getState())
    if (token && !isTesting) {
      const res = await publicServices.me({
        jwt: token,
      })
      dispatch(appAuthThunk(res))
    } else if (!token && !isTesting) {
      dispatch(cleanAuthAction())
    }
    dispatch(completedTestAction())
  } catch (e) {
    dispatch(appAuthErrorThunk(e))
  }
}
