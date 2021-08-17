import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'
import { GetStaticProps } from 'next'
import usePrivateRoute from '../../common/hooks/usePrivateRoute'

interface ProfileProps {}

const Index: React.FC<ProfileProps> = ({}) => {
  const loading = usePrivateRoute()

  return <h1>{loading ? 'loading ...' : 'your profile'}</h1>
}

//===== fetching data =====

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ? locale : 'ru',
        ['common'],
        nextI18NextConfig
      )),
    },
  }
}

export default Index
