import { MetaData } from 'services/static'
import { CategoryLocalesParams } from 'common/utils/locales-params'

export interface HeaderProps {
  meta: MetaData
  localesParams?: CategoryLocalesParams
}
