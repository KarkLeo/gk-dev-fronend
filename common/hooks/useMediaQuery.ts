import { useEffect, useState } from 'react'

type UseMediaQueryT = (query: string) => boolean
/**
 * Check CSS media query and update
 * @param query - CSS media query
 * @return boolean, is match
 */
const useMediaQuery: UseMediaQueryT = (query) => {
  const [isMatch, changeMatch] = useState(false)

  useEffect(() => {
    const checkQuery = () => changeMatch(window.matchMedia(query).matches)
    checkQuery()
    window.addEventListener('resize', checkQuery)
    return () => {
      window.removeEventListener('resize', checkQuery)
    }
  }, [query, changeMatch])

  return isMatch
}

export default useMediaQuery
