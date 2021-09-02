export const setAuthAction = (userID: string) => ({
  type: 'AUTH/SET_AUTH' as const,
  userID,
})

export const cleanAuthAction = () => ({
  type: 'AUTH/CLEAN_AUTH' as const,
})

export const completedTestAction = () => ({
  type: 'AUTH/COMPLETED_TEST' as const,
})
export const resetTestAction = () => ({
  type: 'AUTH/RESET_TEST' as const,
})
