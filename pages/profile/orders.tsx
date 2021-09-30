import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from '../../common/hooks/usePrivateRoute'
import OrderPage from '../../containers/ProfilePage/OrdersPage'
import { MetaData } from '../../services/static'
import { staticServices } from '../../services'
import { useTranslation } from 'next-i18next'

interface ProfileOrdersProps {
  meta: MetaData
}

const ProfileOrders: React.FC<ProfileOrdersProps> = ({ meta }) => {
  const loading = usePrivateRoute()
  const { t } = useTranslation('common')

  return loading ? <h1>{t('profile.loading')}</h1> : <OrderPage meta={meta} />
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
