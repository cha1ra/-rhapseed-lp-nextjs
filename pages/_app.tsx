import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react'
import Fonts from "../components/Fonts";

// https://qiita.com/akifumii/items/3a391abe25bebf207e05
// https://chakra-ui.com/docs/styled-system/theming/customize-theme
// https://chakra-ui.com/docs/styled-system/features/text-and-layer-styles
const theme = extendTheme({
  colors: {
    primary: '#BF0F30',
    secondary: '#F24B4B',
  },
  styles: {
    global: {
      body: {
        background: 'gray.50',
      }
    }
  },
  textStyles: {
    rennie: {
      fontFamily: 'rennie-beanie',
    },
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
