import React from 'react'
import s from './Specifications.module.css'
import { useTranslation } from 'next-i18next'

interface SpecificationsProps {
  box_width: number
  box_length: number
  box_height: number
  weights: number
}

const Specifications: React.FC<SpecificationsProps> = ({
  box_length,
  box_width,
  box_height,
  weights,
}) => {
  const { t } = useTranslation('common')

  return (
    <div className={s.root}>
      <p className={s.options}>
        {t('productPage.box_length')}: {box_length} {t('units.cm')}
      </p>
      <p className={s.options}>
        {t('productPage.box_width')}: {box_width} {t('units.cm')}
      </p>
      <p className={s.options}>
        {t('productPage.box_height')}: {box_height} {t('units.cm')}
      </p>
      <p className={s.options}>
        {t('productPage.weights')}: {weights} {t('units.g')}
      </p>
    </div>
  )
}

export default Specifications
