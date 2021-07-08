/**
 * Lock scroll
 */
export const lockScroll = () => {
  document.body.style.overflow = 'hidden'
  document.body.style.overflowY = 'scroll'
  document.documentElement.style.overflow = 'hidden'
}

/**
 * Unlock scroll
 */
export const unlockScroll = () => {
  document.body.style.removeProperty('overflow')
  document.body.style.removeProperty('overflowY')
  document.documentElement.style.removeProperty('overflow')
}
