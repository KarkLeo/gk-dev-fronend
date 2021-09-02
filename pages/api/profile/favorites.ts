import { NextApiRequest, NextApiResponse } from 'next'
import {
  UserFavoritesUpdateRequest,
  UserProfileResponse,
} from 'services/public'
import { privateServices } from 'services'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt, userID, favorites } = req.body as UserFavoritesUpdateRequest

  const user = await privateServices.updateUserFavorites(
    {
      id: userID,
      favorites,
    },
    jwt
  )
  if (!user) return res.status(401).json({ error: 'User not found' })

  const body: UserProfileResponse = {
    user: user.updateUser.user,
  }

  return res.status(200).json(body)
}
