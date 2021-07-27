import { ProductCardType } from './common.types'

export interface ProductDetail extends ProductCardType {
  description: string
  box_width: number
  box_length: number
  box_height: number
  weights: number
}
