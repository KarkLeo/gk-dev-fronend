import React, { useCallback } from 'react'
import Pagination from 'rc-pagination'
import PagePaginationItem from './PagePaginationItem'
import { useRouter } from 'next/router'
import * as locales from './locales'

const PagePagination: React.FC = () => {
  const router = useRouter()

  const itemRender = useCallback(
    (page, type, element) =>
      PagePaginationItem(page, type, element, router.pathname, router.query),
    [router.pathname, router.query]
  )

  console.log(locales[(router.locale as 'ru') || 'ru'])

  const current: number =
    typeof router.query.page === 'string' ? parseInt(router.query.page) : 1

  return (
    <div>
      <Pagination
        total={100}
        itemRender={itemRender}
        current={current}
        onChange={() => undefined}
        locale={locales[(router.locale as 'ru') || 'ru']}
      />
    </div>
  )
}

export default PagePagination
