import { AuthErrorsType } from './types'

export const openLoginModalAction = () => ({
  type: 'MODAL/OPEN_LOGIN' as const,
})

export const openRegisterModalAction = () => ({
  type: 'MODAL/OPEN_REGISTER' as const,
})

export const closeModalAction = () => ({
  type: 'MODAL/CLOSE' as const,
})

export const setErrorModalAction = (error: AuthErrorsType) => ({
  type: 'MODAL/SET_ERROR' as const,
  error,
})
