import { gql } from '@apollo/client'
import { graphql } from '../apollo-client'

export interface TestOrderNumberData {
  orders: {
    number: string
  }[]
}

export interface TestOrderNumberVars {
  number: string
}

const TEST_ORDER_NUMBER = gql`
  query ($number: String!) {
    orders(where: { number: $number }) {
      number
    }
  }
`

export const testOrderNUmber = async (
  variables: TestOrderNumberVars
): Promise<TestOrderNumberData | undefined> => {
  try {
    const res = await graphql.query<TestOrderNumberData, TestOrderNumberVars>({
      query: TEST_ORDER_NUMBER,
      variables,
      fetchPolicy: 'no-cache',
    })
    return res.data || undefined
  } catch (e) {
    console.log(e)
  }
}
