import { NextApiRequest, NextApiResponse } from 'next'
import { privateServices } from 'services'
import { OrderRequest } from 'services/public'
import { createNumber } from 'common/utils/createNumber'
import { calculateCostServer } from 'common/utils/calculateСost'
import { OrderResponse } from 'services/private'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { jwt, userID, delivery_info, description, cart_items } =
    req.body as OrderRequest

  //===== Create order data =====

  const date = new Date().toISOString()

  //===== Create and check order number =====

  /* @ts-ignore */
  const createAndCheckNumber = async () => {
    const number = await createNumber()
    const res = await privateServices.testOrderNUmber({ number: number })
    if (!res) return null
    if (res.orders.length === 0) return number
    else {
      return await createAndCheckNumber()
    }
  }
  const number = (await createAndCheckNumber()) as null | string

  if (!number) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Is wholesaler =====

  const userIsWholesaler = await privateServices.isWholesaler(
    { id: userID },
    jwt
  )

  //===== Get products data =====

  const productsData = await privateServices.getProductsPriceByCode({
    products: cart_items.map((i) => i.product),
  })
  if (!productsData) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Cart settings =====

  const settings = await privateServices.getCartSettings()

  //===== Create cart data =====

  const [cart, message] = calculateCostServer(
    cart_items,
    productsData ? productsData.products : [],
    settings ? settings.cartSetting : null,
    userIsWholesaler ? userIsWholesaler.user.is_wholesaler : null
  )

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
      cart: cart.cart,
      totalCost: cart.totalCost,
      discount: cart.discount,
      discountedCost: cart.discountedCost,
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

  const body: OrderResponse = {
    jwt: jwt,
    user: profile.user,
    number,
    cart,
    message,
  }

  return res.status(200).json(body)
}
