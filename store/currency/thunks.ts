import { AppThunk } from '../types'
import { publicServices } from 'services'
import { setCurrencyAction } from './actions'
import convertCurrency from 'common/utils/convertCurrency'

export const fetchCurrencyThunk = (): AppThunk => async (dispatch) => {
  try {
    const res = await publicServices.currency()
    res && dispatch(setCurrencyAction(convertCurrency(res)))
  } catch (e) {
    console.log(e)
  }
}
