import {
  DefaultStrapiButton,
  DefaultStrapiImage,
  ProductCardType,
} from './common.types'

export interface HomePageSlider {
  id: string
  title: string
  description: string
  image: DefaultStrapiImage
}

export interface HomePageInfoBlock {
  title: string
  sub_title: string
  description: string
  image: DefaultStrapiImage
  button: DefaultStrapiButton | null
}

export interface HomePageProductCarousel {
  title: string
  products: ProductCardType[]
}

export interface ComponentHomePageProductCarousel
  extends HomePageProductCarousel {
  __typename: 'ComponentHomePageProductCarousel'
  id: string
}

export interface ComponentHomePageInfoBlock extends HomePageInfoBlock {
  __typename: 'ComponentHomePageInfoBlock'
  id: string
}

export type HomePageContent = Array<
  ComponentHomePageInfoBlock | ComponentHomePageProductCarousel
>
