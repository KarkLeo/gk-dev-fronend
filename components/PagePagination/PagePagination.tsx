import React, { useCallback } from 'react'
import Pagination from 'rc-pagination'
import PagePaginationItem from './PagePaginationItem'
import { useRouter } from 'next/router'
import * as locales from './locales'
import s from './PagePagination.module.css'
import { PRODUCTS_PER_PAGE } from '../../common/constans/paginaiton'

interface PagePaginationProps {
  total: number
}

const PagePagination: React.FC<PagePaginationProps> = ({ total }) => {
  const router = useRouter()

  const itemRender = useCallback(
    (page, type, element) =>
      PagePaginationItem(page, type, element, router.pathname, router.query),
    [router.pathname, router.query]
  )

  const current: number =
    typeof router.query.page === 'string' ? parseInt(router.query.page) : 1

  return (
    <div className={s.root}>
      <Pagination
        total={total}
        defaultPageSize={PRODUCTS_PER_PAGE}
        pageSize={PRODUCTS_PER_PAGE}
        itemRender={itemRender}
        current={current}
        onChange={() => undefined}
        locale={locales[(router.locale as 'ru') || 'ru']}
      />
    </div>
  )
}

export default PagePagination
