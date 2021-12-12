import { NextApiRequest, NextApiResponse } from 'next'
import { privateServices } from 'services'
import { createNumber } from 'common/utils/createNumber'
import { SimpleOrderRequest } from 'services/public'
import { calculateCostServer } from 'common/utils/calculateСost'
import { OrderDetailResponse } from 'services/private'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { cart_items, email, description, reCapture, ...delivery_info } =
    req.body as SimpleOrderRequest
  const { phone_number } = delivery_info

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

  //===== Get products data =====

  const productsData = await privateServices.getProductsPriceByCode({
    products: cart_items.map((i) => i.product),
  })
  if (!productsData) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Find user =====

  const users = await privateServices.getUserIdByPhone({
    phone: phone_number,
  })
  const user = users && users.users.length === 1 ? users.users[0] : null

  //===== Cart settings =====

  const settings = await privateServices.getCartSettings()

  //===== Create cart data =====

  const [cart, message] = calculateCostServer(
    cart_items,
    productsData ? productsData.products : [],
    settings ? settings.cartSetting : null,
    user && user.is_wholesaler
  )

  const order = await privateServices.createSimpleOrder({
    userID: user && user.id,
    number,
    date,
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
    description: description,
    user_phone_number: phone_number,
    user_email: email,
  })

  if (!order) return res.status(400).json({ error: 'SOME_ERROR' })

  //===== Create response =====

  const body: OrderDetailResponse = {
    number,
    cart,
    message,
  }

  return res.status(200).json(body)
}
