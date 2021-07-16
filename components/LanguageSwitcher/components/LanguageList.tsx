import React, { useRef } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import useOutsideClick from 'common/hooks/useOutsideClick'
import style from './LanguageList.module.css'
import classNames from 'classnames'
import { CategoryLocalesParams } from 'common/utils/locales-params'

interface languageListProps {
  current?: string
  list?: string[]
  path: string
  localesParams?: CategoryLocalesParams
  closeCallback: () => void
}

const LanguageList: React.FC<languageListProps> = ({
  current,
  list,
  path,
  localesParams,
  closeCallback,
}) => {
  const { t } = useTranslation('common')
  const rootRef = useRef(null)
  useOutsideClick(rootRef, closeCallback)
  return (
    <div ref={rootRef} className={style.root}>
      <ul className={style.list}>
        {list &&
          list.map((lang) => (
            <li key={lang} className={style.item}>
              {lang === current ? (
                <span className={classNames(style.link, style.link_active)}>
                  {t(`languages.${lang as 'ru'}`)}
                </span>
              ) : (
                <Link
                  href={
                    localesParams
                      ? {
                          pathname: path,
                          query: localesParams[lang],
                        }
                      : path
                  }
                  locale={lang}
                  prefetch={false}
                >
                  <a className={style.link}>{t(`languages.${lang as 'ru'}`)}</a>
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default LanguageList
