import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface GetCurrencyData {
  currencySetting: {
    consfig: any
    last_update: string
    data: any
  }
}

const GET_CURRENCY = gql`
  query {
    currencySetting {
      consfig
      last_update
      data
    }
  }
`

export const getCurrency = async (): Promise<GetCurrencyData | undefined> => {
  try {
    const res = await graphql.query<GetCurrencyData>({
      query: GET_CURRENCY,
    })

    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
