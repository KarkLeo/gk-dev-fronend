import { EditProfileForm } from 'components/Forms/EditProfileForm/EditProfileForm'
import Layout from 'components/Layout'
import React from 'react'
import { MetaData } from 'services/static'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import { useTranslation } from 'next-i18next'

interface ProfilePageProps {
  meta: MetaData
}

const ProfilePage: React.FC<ProfilePageProps> = ({ meta }) => {
  const { t } = useTranslation('common')

  return (
    <Layout meta={meta}>
      <ProfileLayout>
        <h1>{t('profile.titles.profile')}</h1>
        <EditProfileForm />
      </ProfileLayout>
    </Layout>
  )
}

export default ProfilePage
