export const setCurrencyAction = (values: Record<string, number>) => ({
  type: 'CURRENCY/SET_CURRENCY' as const,
  values,
})
