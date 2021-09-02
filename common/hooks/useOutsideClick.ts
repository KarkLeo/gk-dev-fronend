import React, { useEffect } from 'react'

type UseOutsideClickT = (
  root: React.RefObject<HTMLDivElement>,
  callback?: () => void
) => void
/**
 * Create outside click callback
 * @param root - ref index.ts root element
 * @param callback - function call index.ts outside click
 */
const useOutsideClick: UseOutsideClickT = (root, callback) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (root.current && !root.current.contains(event.target as Node)) {
        callback && callback()
      }
    }

    document.addEventListener('click', handleClickOutside, true)
    document.addEventListener('touchstart', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [root])
}

export default useOutsideClick
