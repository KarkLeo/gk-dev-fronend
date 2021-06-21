import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import LanguageList from './components/LanguageList'
import Icon from 'components/Icon'
import style from './LanguageSwitcher.module.css'
import animate from './LSTransition.module.css'
import { CSSTransition } from 'react-transition-group'

const LanguageSwitcher: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const [isOpen, toggleOpen] = useState(false)
  const openHandler = () => toggleOpen(true)
  const closeHandler = () => toggleOpen(false)

  return (
    <div className={style.root}>
      <button
        onClick={openHandler}
        className={style.button}
        type="button"
        aria-haspopup="true"
      >
        <span>{t(`languages.${router.locale as 'ru'}`)}</span>
        <Icon iconId="arrow_drop_down" className={style.button__icon} />
      </button>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames={{ ...animate }}
        unmountOnExit
      >
        <LanguageList
          list={router.locales}
          path={router.pathname}
          current={router.locale}
          closeCallback={closeHandler}
        />
      </CSSTransition>
    </div>
  )
}

export default LanguageSwitcher
