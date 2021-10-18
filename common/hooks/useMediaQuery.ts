import { useEffect, useState } from 'react'
import { queryBreakpoints } from '../../styles/mediaQuery'

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

export const useMediaBreakpoints = () => {
  const [match, changeMatch] = useState(queryBreakpoints[0][0])

  useEffect(() => {
    const checkQuery = () => {
      const breakpoint = queryBreakpoints
        .slice()
        .reverse()
        .find((i) => window.matchMedia(i[1]).matches)
      changeMatch(breakpoint ? breakpoint[0] : 'test')
    }
    checkQuery()
    window.addEventListener('resize', checkQuery)
    return () => {
      window.removeEventListener('resize', checkQuery)
    }
  }, [changeMatch])

  return match
}
