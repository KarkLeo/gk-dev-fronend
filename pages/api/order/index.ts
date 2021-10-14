import { NextApiRequest, NextApiResponse } from 'next'
import { privateServices } from 'services'
import { OrderRequest } from 'services/public/types/orders.types'
import { createNumber } from 'common/utils/createNumber'
import { UserAuthResponse } from 'services/public'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt, userID, delivery_info, description, cart_items } =
    req.body as OrderRequest

  //===== Create order data =====

  const date = new Date().toISOString()

  //===== Create and check order number =====

  /* @ts-ignore */
  const createAndCheckNumber = async () => {
    const number = await createNumber()
    const res = await privateServices.testOrderNUmber({ number: number }, jwt)
    if (!res) return null
    if (res.orders.length === 0) return number
    else {
      return await createAndCheckNumber()
    }
  }
  const number = (await createAndCheckNumber()) as null | string

  if (!number) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Get products data =====

  const productsData = await privateServices.getProductsPriceByCode(
    {
      products: cart_items.map((i) => i.product),
    },
    jwt
  )
  if (!productsData) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Create cart data =====

  const cart = productsData.products.map((i) => ({
    product: i.id,
    count:
      cart_items.find((cartItem) => cartItem.product === i.vendor_code)
        ?.count || 1,
    current_price: i.price,
    vendor_code: i.vendor_code,
  }))
  const totalCost: number = cart.reduce(
    (res, i) => res + i.count * i.current_price,
    0
  )
  const discount: number = 0
  const discountedCost: number = totalCost - discount

  const order = await privateServices.createOrder(
    {
      number,
      date,
      userID,
      address: {
        ...delivery_info,
        novaposhta_number:
          delivery_info.novaposhta_number === ''
            ? null
            : parseInt(delivery_info.novaposhta_number),
      },
      cart,
      totalCost,
      discount,
      discountedCost,
      description,
    },
    jwt
  )

  if (!order) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Get profile =====

  const profile = await privateServices.profileUser(
    {
      id: userID,
    },
    jwt
  )
  if (!profile) return res.status(400).json({ error: 'SOME_ERROR' })

  const body: UserAuthResponse = {
    jwt: jwt,
    user: profile.user,
  }

  return res.status(200).json(body)
}
