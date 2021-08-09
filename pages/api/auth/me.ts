import { NextApiRequest, NextApiResponse } from 'next'
import { UserAuthResponse, UserMe } from 'services/public'
import { privateServices } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt } = req.body as UserMe

  const user = await privateServices.meUser({}, jwt)
  if (!user) return res.status(401).json({ error: 'User not found' })

  const profile = await privateServices.profileUser(
    {
      id: user.me.id,
    },
    jwt
  )
  if (!profile) return res.status(400).json({ error: 'Some error' })

  const body: UserAuthResponse = {
    jwt: jwt,
    user: profile.user,
  }

  return res.status(200).json(body)
}
