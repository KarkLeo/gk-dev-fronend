import Link from 'next/link'
import React from 'react'
import { CategoryListItem } from 'services/static'
import s from './CategoryList.module.css'

interface CategoryListProps {
  categories: CategoryListItem[]
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <ul className={s.list}>
      {categories.map((i) => (
        <li key={i.id} className={s.item}>
          <Link href={`/${i.slug}`}>
            <a className={s.link}>{i.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default CategoryList
