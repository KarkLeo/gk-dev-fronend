import { gql } from '@apollo/client'
import client from '../apollo-client'

export interface HomePageSlider {
  id: string
  title: string
  description: string
  image: {
    url: string
    formats: JSON
  }
}

export interface HomePageData {
  homePage: {
    slider: HomePageSlider[]
  }
}

export interface HomePageVars {
  lang: string
}

const GET_HOME_PAGE = gql`
  query ($lang: String!) {
    homePage(locale: $lang) {
      slider {
        id
        title
        description
        image {
          url
          formats
        }
      }
    }
  }
`

export const getHomePage = async (
  variables: HomePageVars
): Promise<HomePageData> => {
  const res = await client.query<HomePageData, HomePageVars>({
    query: GET_HOME_PAGE,
    variables,
  })
  return res.data
}
