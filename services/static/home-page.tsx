import { gql } from '@apollo/client'
import client from '../apollo-client'
import { HomePageContent, HomePageSlider } from './types/home-page.types'

export interface HomePageData {
  homePage: {
    slider: HomePageSlider[]
    content: HomePageContent
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
      content {
        ... on ComponentHomePageProductCarousel {
          __typename
          id
          title
          products {
            name
            vandor_code
            price
            old_price
            wholesale_price
            photos {
              url
            }
          }
        }
        ... on ComponentHomePageInfoBlock {
          __typename
          id
          title
          sub_title
          description
          image {
            url
          }
          button {
            text
            url
          }
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
