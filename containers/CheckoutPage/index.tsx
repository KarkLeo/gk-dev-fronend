import React from 'react'
import Layout from 'components/Layout'
import { MetaData } from 'services/static'
import s from './CheckoutPage.module.css'
import { useTranslation } from 'next-i18next'
import { useSelector } from 'react-redux'
import CheckoutForm from 'components/CheckoutForm'
import { getIsAuthSelector } from '../../store/auth'
import CheckoutAuth from './components/CheckoutAuth/CheckoutAuth'
import CheckoutCart from './components/CheckoutCart/CheckoutCart'

interface CheckoutPageProps {
  meta: MetaData
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ meta }) => {
  const { t } = useTranslation('common')

  const isAuth = useSelector(getIsAuthSelector)
  return (
    <Layout meta={meta}>
      <h1>{t('checkout.title')}</h1>
      <div className={s.grid}>
        <div>
          <CheckoutCart />
        </div>
        <div>{isAuth ? <CheckoutForm /> : <CheckoutAuth />}</div>
      </div>
    </Layout>
  )
}

export default CheckoutPage
