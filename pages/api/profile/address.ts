import { NextApiRequest, NextApiResponse } from 'next'
import { UserAddressUpdateRequest, UserProfileResponse } from 'services/public'
import { privateServices } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt, userID, address } = req.body as UserAddressUpdateRequest

  const user = await privateServices.updateUserAddress(
    {
      id: userID,
      address,
    },
    jwt
  )
  if (!user) return res.status(401).json({ error: 'User not found' })

  const body: UserProfileResponse = {
    user: user.updateUser.user,
  }

  return res.status(200).json(body)
}
