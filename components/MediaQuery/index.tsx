import React from 'react'
import useMediaQuery from 'common/hooks/useMediaQuery'
import {
  desktopOnly,
  mobileAndTab,
  mobileOnly,
  tabAndDesktop,
  tabOnly,
} from 'styles/mediaQuery'

export const MobileOnly: React.FC = ({ children }) => {
  const isShow = useMediaQuery(mobileOnly)
  return isShow ? <>{children}</> : null
}

export const MobileAndTab: React.FC = ({ children }) => {
  const isShow = useMediaQuery(mobileAndTab)
  return isShow ? <>{children}</> : null
}

export const TabOnly: React.FC = ({ children }) => {
  const isShow = useMediaQuery(tabOnly)
  return isShow ? <>{children}</> : null
}

export const TabAndDesktop: React.FC = ({ children }) => {
  const isShow = useMediaQuery(tabAndDesktop)
  return isShow ? <>{children}</> : null
}

export const DesktopOnly: React.FC = ({ children }) => {
  const isShow = useMediaQuery(desktopOnly)
  return isShow ? <>{children}</> : null
}
