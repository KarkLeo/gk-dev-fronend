import Header from './Header'
import React from 'react'
import useMediaQuery from 'common/hooks/useMediaQuery'
import { mobileAndTab } from 'styles/mediaQuery'
import MobileHeader from './MobileHeader'
import { HeaderProps } from './types'

const AppHeader: React.FC<HeaderProps> = (props) => {
  const mobile = useMediaQuery(mobileAndTab)

  return mobile ? <MobileHeader {...props} /> : <Header {...props} />
}

export default AppHeader
