import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from '../../common/hooks/usePrivateRoute'
import OrderPage from '../../containers/ProfilePage/OrdersPage'
import { MetaData } from '../../services/static'
import { staticServices } from '../../services'
import Loading from '../../components/Loading/Loading'

interface ProfileOrdersProps {
  meta: MetaData
}

const ProfileOrders: React.FC<ProfileOrdersProps> = ({ meta }) => {
  const loading = usePrivateRoute()

  return loading ? <Loading /> : <OrderPage meta={meta} />
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

export default ProfileOrders
