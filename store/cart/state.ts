import { CartState } from './types'

export const initialState: CartState = {
  products: {},
  deliveryInfo: {
    addressID: null,
    newAddress: null,
  },
  description: '',
  modal: null,
  setting: null,
}
