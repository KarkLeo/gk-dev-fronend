import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { EditPasswordForm } from 'components/Forms/EditPasswordForm/EditPasswordForm'
import { useTranslation } from 'next-i18next'

interface PasswordPageProps {
  meta: MetaData
}

const PasswordPage: React.FC<PasswordPageProps> = ({ meta }) => {
  const { t } = useTranslation('common')

  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>{t('profile.titles.password')}</h1>
        <EditPasswordForm />
      </ProfileLayout>
    </Layout>
  )
}

export default PasswordPage
