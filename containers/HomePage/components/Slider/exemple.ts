import { buildUrl } from 'cloudinary-build-url'

const myReg = /.*\/(.*)\.\w+$/
export const myUrl = (url: string): string => {
  const res = url.match(myReg)

  const newurl = buildUrl((res && res[2]) || '', {
    cloud: {
      cloudName: 'karkleo',
    },
    transformations: {
      effect: {
        effect: 'blur:1000',
        quality: 1,
      },
    },
  })
  return newurl
}
