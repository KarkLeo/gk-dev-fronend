const START_DATE = '1.1.2021'

const startDate = new Date(START_DATE)
const start = startDate.getTime()

export const createNumber = async (): Promise<string> => {
  const now = Date.now()
  const value = now - start
  return Math.round(value % Math.sqrt(value)).toString()
}
