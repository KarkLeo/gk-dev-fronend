import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from 'common/hooks/usePrivateRoute'
import { staticServices } from 'services'
import { MetaData } from 'services/static'
import CheckoutPage from '../containers/CheckoutPage'
import useCheckoutRoute from '../common/hooks/useCheckoutRoute'

interface CheckoutProps {
  meta: MetaData
}

const Checkout: React.FC<CheckoutProps> = ({ meta }) => {
  useCheckoutRoute()

  return <CheckoutPage meta={meta} />
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = await staticServices.getMeta({
    lang: locale ? locale : 'ru',
  })

  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
      meta,
    },
  }
}

export default Checkout
