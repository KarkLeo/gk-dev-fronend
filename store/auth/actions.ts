export const setAuthAction = (
  userID: string,
  isWholesaler: boolean | null
) => ({
  type: 'AUTH/SET_AUTH' as const,
  userID,
  isWholesaler,
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
