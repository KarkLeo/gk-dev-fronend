export const setAuthAction = (userID: string) => ({
  type: 'AUTH/SET_AUTH' as const,
  userID,
})

export const cleanAuthAction = () => ({
  type: 'AUTH/CLEAN_AUTH' as const,
})
