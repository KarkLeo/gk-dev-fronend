import { MetaData } from 'services/static'
import { DefaultLocalesParams } from 'common/utils/locales-params'

export interface HeaderProps {
  meta: MetaData
  localesParams?: DefaultLocalesParams
}
