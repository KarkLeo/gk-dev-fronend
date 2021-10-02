import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { useSelector } from 'react-redux'
import { getProfileOrdersSelector } from 'store/profile'
import OrderCard from '../../components/OrderCard/OrderCard'
import { useTranslation } from 'next-i18next'
import ProfileTitle from './components/ProfileLayout/components/ProfileTitle/ProfileTitle'

interface OrderPageProps {
  meta: MetaData
}

const OrderPage: React.FC<OrderPageProps> = ({ meta }) => {
  const orders = useSelector(getProfileOrdersSelector)
  const { t } = useTranslation('common')

  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <ProfileTitle>{t('profile.titles.orders')}</ProfileTitle>
        {orders && orders.map((i) => <OrderCard key={i.number} data={i} />)}
      </ProfileLayout>
    </Layout>
  )
}

export default OrderPage
