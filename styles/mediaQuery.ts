const mobileMax = '768px'
const tabMax = '1200px'

export const mobileOnly = `(max-width: ${mobileMax})`
export const mobileAndTab = `(max-width: ${tabMax})`
export const tabOnly = `(min-width: ${mobileMax}) and (max-width: ${tabMax})`
export const tabAndDesktop = `(min-width: ${mobileMax})`
export const desktopOnly = `(min-width: ${tabMax})`
