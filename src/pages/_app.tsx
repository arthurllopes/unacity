import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import {NavigateContextProvider} from '../hooks/useNavigate'
import { Provider } from 'react-redux'
import store from '../store/configureStore'

function MyApp({ Component, pageProps }: AppProps) {
  function reportWebVitals( metric: any) {
    console.log(metric)
  }
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
