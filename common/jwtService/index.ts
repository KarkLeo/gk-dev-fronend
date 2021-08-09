const jwtKey = 'jwt'

export const setJwt = (token: string) =>
  window && window.localStorage.setItem(jwtKey, token)

export const getJwt = (): string | null =>
  (window && window.localStorage.getItem(jwtKey)) || null

export const removeJwt = () => window && window.localStorage.removeItem(jwtKey)
