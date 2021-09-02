import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { HOME_PAGE_URL } from 'route'
import { getCartProductsCountSelector } from 'store/cart/selectors'
import useLoaded from './useLoaded'

const useCheckoutRoute = () => {
  const loaded = useLoaded()
  const router = useRouter()

  const cartCount = useSelector(getCartProductsCountSelector)
  if (loaded && cartCount < 1) router && router.push(HOME_PAGE_URL)
}

export default useCheckoutRoute
