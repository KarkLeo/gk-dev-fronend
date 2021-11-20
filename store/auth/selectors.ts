import { AppState } from '../types'

export const getIsAuthSelector = (state: AppState): boolean => state.auth.isAuth

export const getIsTestedSelector = (state: AppState): boolean =>
  state.auth.isTested

export const getIsWholesalerSelector = (state: AppState): boolean | null =>
  state.auth.isWholesaler

export const getUserIDSelector = (state: AppState) => state.auth.userID
