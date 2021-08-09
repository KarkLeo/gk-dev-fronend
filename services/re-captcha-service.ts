import { client } from './axios-client'

export interface ReCaptchaResponse {
  success: boolean
  challenge_ts: string
  hostname: string
  'error-codes': string[]
}

export const reCaptchaService = async (
  token: string
): Promise<ReCaptchaResponse> => {
  const res = await client.post<ReCaptchaResponse>(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {},
    {
      headers: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
      },
    }
  )

  return res.data
}
