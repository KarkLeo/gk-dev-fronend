import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { meThunk } from '../../store/auth'

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(meThunk())
  }, [dispatch])
}

export default useAuth
