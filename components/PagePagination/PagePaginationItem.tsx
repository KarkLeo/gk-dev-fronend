import React from 'react'
import Link from 'next/link'

type PagePaginationItemType = (
  current: number,
  type: string,
  element: React.ReactNode,
  pathname: string,
  query: Record<string, string | string[] | undefined>
) => React.ReactNode

const PagePaginationItem: PagePaginationItemType = (
  current,
  type,
  element,
  pathname,
  query
) => {
  const pathWithPage = /\/\[page\]$/

  const rootPath = pathname.replace(pathWithPage, '')
  const { page, ...params } = query
  const isFirstPage = current === 1

  if (type === 'page')
    return (
      <Link
        href={{
          pathname: isFirstPage ? rootPath : rootPath + '/[page]',
          query: isFirstPage ? { ...params } : { ...params, page: current },
        }}
      >
        <a>{current}</a>
      </Link>
    )
  return element
}

export default PagePaginationItem
