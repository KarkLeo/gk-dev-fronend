import { AppState } from '../types'
import { AuthErrorsType } from './types'

export const getModalStatusSelector = (state: AppState) => state.modal

export const getModalErrorSelector = (state: AppState): AuthErrorsType =>
  state.modal.error
