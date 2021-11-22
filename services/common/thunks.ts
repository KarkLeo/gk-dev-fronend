import { AppThunk } from 'store/types'
import { fetchCurrencyThunk } from '../../store/currency'
import { fetchCartSettingsThunk } from '../../store/cart'

export const dataWorkerThunk = (): AppThunk => (dispatch) => {
  dispatch(fetchCurrencyThunk())
  dispatch(fetchCartSettingsThunk())
}
