import { NextApiRequest, NextApiResponse } from 'next'
import { UserProfileResponse, UserUpdateRequest } from 'services/public'
import { privateServices } from 'services'
import { checkProfileFields } from '../../../common/validators/profile'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt, userID, data } = req.body as UserUpdateRequest

  if (!checkProfileFields(data))
    return res.status(418).json({ error: 'No data' })

  const profile = await privateServices.updateUser(
    {
      id: userID,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
    },
    jwt
  )
  if (!profile) return res.status(400).json({ error: 'SOME_ERROR' })

  const body: UserProfileResponse = {
    user: profile.updateUser.user,
  }

  return res.status(200).json(body)
}
