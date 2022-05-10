import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from '@chakra-ui/react';
import "@fontsource/quicksand"
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './pages/home/home';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#1D3461",
      // ...
      900: "#1a202c",
    },
  },
  fonts: {
    body: 'Quicksand, sans-serif',
    heading: 'Quicksand, sans-serif'
  }
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher></ColorModeSwitcher>
      <Home />
    </ChakraProvider>
  );
}

export default App;
