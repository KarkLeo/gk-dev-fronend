import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface SetCurrencyData {
  currencySetting: {
    consfig: any
    last_update: string
    data: any
  }
}

export interface SetCurrencyVars {
  last_update: string
  data: string
}

const SET_CURRENCY = gql`
  mutation ($data: JSON!, $last_update: Date!) {
    updateCurrencySetting(
      input: { data: { last_update: $last_update, data: $data } }
    ) {
      currencySetting {
        consfig
        data
        last_update
      }
    }
  }
`

export const setCurrency = async (
  variables: SetCurrencyVars
): Promise<SetCurrencyData | undefined> => {
  try {
    const res = await graphql.mutate<SetCurrencyData, SetCurrencyVars>({
      mutation: SET_CURRENCY,
      variables,
    })

    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
