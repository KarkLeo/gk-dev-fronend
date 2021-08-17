import { useSelector } from 'react-redux'
import { getIsAuthSelector, getIsTestedSelector } from 'store/auth'
import { useRouter } from 'next/router'
import useAuth from './useAuth'
import { HOME_PAGE_URL } from 'route'

const usePrivateRoute = () => {
  useAuth()
  const router = useRouter()

  const isAuth = useSelector(getIsAuthSelector)
  const isTested = useSelector(getIsTestedSelector)

  if (!isAuth && isTested) router.push(HOME_PAGE_URL)

  return !isTested || !isAuth
}

export default usePrivateRoute
