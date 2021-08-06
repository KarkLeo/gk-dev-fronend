import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log(req.body)

  // res.status(200).json({ name: 'John Doe' })
}

// mutation ($email: String!, $username: String!, $password: String!) {
//   register(input:{
//     email: $email,
//       username: $username
//     password:$password
//   }) {
//     jwt
//     user {
//       id
//     }
//   }
// }
