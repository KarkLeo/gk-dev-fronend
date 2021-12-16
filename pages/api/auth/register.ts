import { NextApiRequest, NextApiResponse } from 'next'
import { UserAuthResponse, UserRegister } from 'services/public'
import { privateServices, reCaptchaService } from 'services'
import {
  checkRegisterFields,
  checkRegisterForm,
} from 'common/validators/register'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const data = req.body as UserRegister
  if (!checkRegisterFields(data))
    return res.status(418).json({ error: 'No data' })

  if (!checkRegisterForm(data))
    return res.status(418).json({ error: 'Invalid data' })

  const reCaptcha = await reCaptchaService(data.reCapture)
  if (!reCaptcha.success)
    return res.status(418).json({ error: 'You are a robot' })

  const user = await privateServices.registerUser({
    email: data.email,
    password: data.password,
  })
  if (!user) return res.status(401).json({ error: 'EMAIL_ALREADY_EXISTS' })

  const profile = await privateServices.updateUser(
    {
      id: user.register.user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
    },
    user.register.jwt
  )
  if (!profile) return res.status(400).json({ error: 'SOME_ERROR' })

  let body: UserAuthResponse = {
    jwt: user.register.jwt,
    user: profile.updateUser.user,
  }

  const orders = await privateServices.getOrdersIdByPhone({
    phone: data.phone_number,
  })

  if (orders && orders.orders.length > 0) {
    const updateProfile = await privateServices.updateUserOrders(
      {
        id: user.register.user.id,
        orders: orders.orders.map((i) => i.id),
      },
      user.register.jwt
    )
    if (!updateProfile) return res.status(400).json({ error: 'SOME_ERROR' })

    body = {
      jwt: user.register.jwt,
      user: updateProfile.updateUser.user,
    }
  }

  return res.status(200).json(body)
}
