const mobileMax = '768px'
const tabMax = '1280px'

export const mobileOnly = `(max-width: ${mobileMax})`
export const mobileAndTab = `(max-width: ${tabMax})`
export const tabOnly = `(min-width: ${mobileMax}) and (max-width: ${tabMax})`
export const tabAndDesktop = `(min-width: ${mobileMax})`
export const desktopOnly = `(min-width: ${tabMax})`

const breakpoints = [
  ['xs', '0'],
  ['sm', '576px'],
  ['md', '768px'],
  ['lg', '992px'],
  ['xl', '1200px'],
  ['xxl', '1400px'],
] as const

export const queryBreakpoints = breakpoints.map((i) => [
  i[0],
  `(min-width: ${i[1]})`,
])
