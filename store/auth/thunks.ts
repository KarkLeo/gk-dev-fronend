import { AppThunk } from '../types'
import {
  UserAuthResponse,
  UserLogin,
  UserMe,
  UserRegister,
} from 'services/public'
import { publicServices } from 'services'
import { removeJwt, setJwt } from 'common/jwtService'
import { setAuthAction } from './actions'
import { closeModalAction } from '../modal'
import { setProfileAction } from '../profile'

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
      })
    )
    dispatch(closeModalAction())
  }

export const registerThunk =
  (user: UserRegister): AppThunk =>
  async (dispatch) => {
    try {
      const res = await publicServices.register(user)
      dispatch(appAuthThunk(res))
    } catch (e) {
      console.log(e)
    }
  }

export const loginThunk =
  (user: UserLogin): AppThunk =>
  async (dispatch) => {
    try {
      const res = await publicServices.login(user)
      dispatch(appAuthThunk(res))
    } catch (e) {
      console.log(e)
    }
  }

export const meThunk =
  (user: UserMe): AppThunk =>
  async (dispatch) => {
    try {
      const res = await publicServices.me(user)
      dispatch(appAuthThunk(res))
    } catch (e) {
      removeJwt()
      console.log(e)
    }
  }
