import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from '../../common/hooks/usePrivateRoute'
import { staticServices } from '../../services'
import { MetaData } from '../../services/static'
import ProfilePage from '../../containers/ProfilePage'
import { useTranslation } from 'next-i18next'

interface ProfileProps {
  meta: MetaData
}

const Profile: React.FC<ProfileProps> = ({ meta }) => {
  const loading = usePrivateRoute()
  const { t } = useTranslation('common')

  return loading ? <h1>{t('profile.loading')}</h1> : <ProfilePage meta={meta} />
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

export default Profile
