import React, { useCallback, useEffect } from 'react'
import { Button } from 'components/Controllers'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCartAction, getOrderModalSelector } from 'store/cart'
import Modal from 'components/Modal/Modal'
import { useTranslation } from 'next-i18next'
import s from './CheckoutModal.module.css'

const CheckoutModal: React.FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const modal = useSelector(getOrderModalSelector)

  const modalCloseHandler = useCallback(
    () => dispatch(cleanCartAction()),
    [dispatch]
  )

  useEffect(
    () => () => {
      modalCloseHandler()
    },
    [modalCloseHandler]
  )

  return modal ? (
    <Modal title={t('checkout.modal.title')} close={modalCloseHandler}>
      <p className={s.info}>
        {t('checkout.modal.number')}:{' '}
        <span className={s.info__value}>{modal.number}</span>
      </p>
      <p className={s.info}>
        {t('checkout.modal.cost')}:{' '}
        <span className={s.info__value}>
          {modal.cost.toFixed(2)} {t('units.hrn')}
        </span>
      </p>
      <p className={s.description}>{t('checkout.modal.description')}</p>
      <div className={s.controllers}>
        <Button onClick={modalCloseHandler} primary>
          {t('forms.buttons.send')}
        </Button>
      </div>
    </Modal>
  ) : null
}

export default CheckoutModal
