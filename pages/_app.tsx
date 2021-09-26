import 'styles/fonts.css'
import 'styles/variables.css'
import 'styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'swiper/swiper-bundle.min.css'
import 'rc-pagination/assets/index.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from 'next-i18next.config.js'
import { useStore } from 'store/store'
import { Provider } from 'react-redux'
import { Sprite } from 'components/Icon'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Sprite />
    </Provider>
  )
}
export default appWithTranslation(MyApp, nextI18NextConfig)
