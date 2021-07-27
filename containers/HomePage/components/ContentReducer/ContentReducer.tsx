import React from 'react'
import { HomePageContent } from 'services/static/'
import InfoBlock from '../InfoBlock/InfoBlock'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

interface ContentReducerProps {
  data: HomePageContent[number]
}

const ContentReducer: React.FC<ContentReducerProps> = ({ data }) => {
  switch (data.__typename) {
    case 'ComponentHomePageInfoBlock':
      return <InfoBlock data={data} />
    case 'ComponentHomePageProductCarousel':
      return <ProductCarousel data={data} />
    default:
      return null
  }
}

export default ContentReducer
