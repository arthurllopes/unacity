import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import {NavigateContextProvider} from '../hooks/useNavigate'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import { getAnalytics } from 'firebase/analytics'
import { app } from '../services/firebase'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  function reportWebVitals( metric: any) {
    console.log(metric)
  }
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const analitics = getAnalytics(app)
    }
  }, [])
  return (
    <Provider store={store}>
      <NavigateContextProvider>
        <ChakraProvider theme={theme} >
          <Component {...pageProps} />
        </ChakraProvider>
      </NavigateContextProvider>
    </Provider>
  )
}

export default MyApp
