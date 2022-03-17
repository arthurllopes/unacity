import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import {NavigateContextProvider} from '../hooks/useNavigate'

function MyApp({ Component, pageProps }: AppProps) {
  function reportWebVitals( metric: any) {
    console.log(metric)
  }
  return (
    <NavigateContextProvider>
      <ChakraProvider theme={theme} >
        <Component {...pageProps} />
      </ChakraProvider>
    </NavigateContextProvider>
  )
}

export default MyApp
