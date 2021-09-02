import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { useSelector } from 'react-redux'
import { getProfileOrdersSelector } from 'store/profile'
import OrderCard from '../../components/OrderCard/OrderCard'

interface OrderPageProps {
  meta: MetaData
}

const OrderPage: React.FC<OrderPageProps> = ({ meta }) => {
  const orders = useSelector(getProfileOrdersSelector)
  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>Orders</h1>
        {orders && orders.map((i) => <OrderCard key={i.number} data={i} />)}
      </ProfileLayout>
    </Layout>
  )
}

export default OrderPage
