import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrencyThunk } from 'store/currency'

const useFetchCurrency = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrencyThunk())
  }, [dispatch])
}

export default useFetchCurrency
