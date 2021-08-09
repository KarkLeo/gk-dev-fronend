export const openLoginModalAction = () => ({
  type: 'MODAL/OPEN_LOGIN' as const,
})

export const openRegisterModalAction = () => ({
  type: 'MODAL/OPEN_REGISTER' as const,
})

export const closeModalAction = () => ({
  type: 'MODAL/CLOSE' as const,
})
