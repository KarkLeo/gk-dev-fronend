import { NextApiRequest, NextApiResponse } from 'next'
import { UserAuthResponse, UserPasswordRequest } from 'services/public'
import { privateServices } from 'services'
import { checkPasswordForm } from 'common/validators/password'
import { emailValidateRequired } from 'common/validators/fields'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { email, passwords } = req.body as UserPasswordRequest

  if (!checkPasswordForm(passwords))
    return res.status(418).json({ error: 'No data' })

  if (emailValidateRequired(email))
    return res.status(418).json({ error: 'No data' })

  const user = await privateServices.loginUser({
    email: email,
    password: passwords.oldPassword,
  })

  if (!user) return res.status(401).json({ error: 'User not found' })

  const profile = await privateServices.updateUserPassword(
    {
      id: user.login.user.id,
      password: passwords.password,
    },
    user.login.jwt
  )

  if (!profile) return res.status(400).json({ error: 'SOME_ERROR' })

  const body: UserAuthResponse = {
    jwt: user.login.jwt,
    user: profile.updateUser.user,
  }

  return res.status(200).json(body)
}
