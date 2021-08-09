import { NextApiRequest, NextApiResponse } from 'next'
import { UserAuthResponse, UserLogin } from 'services/public'
import { checkLoginFields, checkLoginForm } from 'common/validators/login'
import { privateServices, reCaptchaService } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const data = req.body as UserLogin

  if (!checkLoginFields(data)) return res.status(418).json({ error: 'No data' })

  if (!checkLoginForm(data))
    return res.status(418).json({ error: 'Invalid data' })

  const reCaptcha = await reCaptchaService(data.reCapture)
  if (!reCaptcha.success)
    return res.status(418).json({ error: 'You are a robot' })

  const user = await privateServices.loginUser({
    email: data.email,
    password: data.password,
  })
  if (!user) return res.status(401).json({ error: 'Email or password is bad' })

  const profile = await privateServices.profileUser(
    {
      id: user.login.user.id,
    },
    user.login.jwt
  )
  if (!profile) return res.status(400).json({ error: 'Some error' })

  const body: UserAuthResponse = {
    jwt: user.login.jwt,
    user: profile.user,
  }

  return res.status(200).json(body)
}
