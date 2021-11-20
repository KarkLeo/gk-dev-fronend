import React from 'react'
import { useSelector } from 'react-redux'

import { getIsWholesalerSelector } from 'store/auth'
import { useTranslation } from 'next-i18next'
import s from './WholesalerLabel.module.css'

const WholesalerLabel: React.FC = () => {
  const isWholesaler = useSelector(getIsWholesalerSelector)
  const { t } = useTranslation()

  return isWholesaler ? (
    <div className={s.root}>{t('profile.wholesaler')}</div>
  ) : null
}

export default WholesalerLabel
