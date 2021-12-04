import React from 'react'
import { SimpleOrder } from 'services/public'
import useSimpleOrderForm from './useSimpleOrderForm'
import { useTranslation } from 'next-i18next'
import { Button, TextField, TextSwitcher } from 'components/Controllers'
import s from '../FormStyle.module.css'
import ReCaptcha from '../../ReCature/ReCature'

export interface SimpleOrderFormProps {
  initData?: SimpleOrder
  onSubmit?: (data: SimpleOrder) => void
  onCancel?: () => void
}

const SimpleOrderForm: React.FC<SimpleOrderFormProps> = (props) => {
  const { data, error, isError, handlers } = useSimpleOrderForm(props)
  const { t } = useTranslation('common')
  return (
    <div className={s.root}>
      <div className={s.grid}>
        <div className={s.grid__item_full}>
          <TextField
            value={data.phone_number}
            onChange={handlers.change('phone_number')}
            label={t('forms.fields.phone_number')}
            onFocus={handlers.focus('phone_number')}
            onBlur={handlers.blur('phone_number')}
            error={Boolean(error.phone_number)}
            errorMessage={
              error.phone_number
                ? t(('forms.errors.' + error.phone_number) as any)
                : ''
            }
            isMain
          />
        </div>

        <TextField
          value={data.first_name}
          onChange={handlers.change('first_name')}
          label={t('forms.fields.first_name')}
          onFocus={handlers.focus('first_name')}
          onBlur={handlers.blur('first_name')}
          error={Boolean(error.first_name)}
          errorMessage={
            error.first_name
              ? t(('forms.errors.' + error.first_name) as any)
              : ''
          }
        />
        <TextField
          value={data.last_name}
          onChange={handlers.change('last_name')}
          label={t('forms.fields.last_name')}
          onFocus={handlers.focus('last_name')}
          onBlur={handlers.blur('last_name')}
          error={Boolean(error.last_name)}
          errorMessage={
            error.last_name ? t(('forms.errors.' + error.last_name) as any) : ''
          }
        />
        <TextField
          value={data.email}
          onChange={handlers.change('email')}
          label={t('forms.fields.email')}
          onFocus={handlers.focus('email')}
          onBlur={handlers.blur('email')}
          error={Boolean(error.email)}
          errorMessage={
            error.email ? t(('forms.errors.' + error.email) as any) : ''
          }
        />
        <TextSwitcher
          checked={data.is_novaposhta}
          onChange={handlers.isNovaposhta}
          title={t('forms.fields.dispatch')}
          negative={t('forms.fields.ukr_post')}
          positive={t('forms.fields.new_post')}
        />

        {data.is_novaposhta && (
          <TextField
            value={data.city}
            onChange={handlers.change('city')}
            label={t('forms.fields.city')}
            onFocus={handlers.focus('city')}
            onBlur={handlers.blur('city')}
            error={Boolean(error.city)}
            errorMessage={
              error.city ? t(('forms.errors.' + error.city) as any) : ''
            }
          />
        )}
        {data.is_novaposhta && (
          <TextField
            value={data.novaposhta_number}
            onChange={handlers.change('novaposhta_number')}
            label={t('forms.fields.novaposhta_number')}
            onFocus={handlers.focus('novaposhta_number')}
            onBlur={handlers.blur('novaposhta_number')}
            error={Boolean(error.novaposhta_number)}
            errorMessage={
              error.novaposhta_number
                ? t(('forms.errors.' + error.novaposhta_number) as any)
                : ''
            }
          />
        )}
        {!data.is_novaposhta && (
          <TextField
            value={data.post_code}
            onChange={handlers.change('post_code')}
            label={t('forms.fields.post_code')}
            onFocus={handlers.focus('post_code')}
            onBlur={handlers.blur('post_code')}
            error={Boolean(error.post_code)}
            errorMessage={
              error.post_code
                ? t(('forms.errors.' + error.post_code) as any)
                : ''
            }
          />
        )}
        {!data.is_novaposhta && (
          <TextField
            value={data.address}
            onChange={handlers.change('address')}
            label={t('forms.fields.address')}
            onFocus={handlers.focus('address')}
            onBlur={handlers.blur('address')}
            error={Boolean(error.address)}
            errorMessage={
              error.address ? t(('forms.errors.' + error.address) as any) : ''
            }
          />
        )}
      </div>

      <div className={s.controls}>
        <Button onClick={handlers.send} disabled={isError}>
          {t('forms.buttons.send')}
        </Button>
        <Button onClick={handlers.cancel}>{t('forms.buttons.cancel')}</Button>
      </div>

      <ReCaptcha onChange={handlers.reCaptcha} />
    </div>
  )
}

export default SimpleOrderForm
