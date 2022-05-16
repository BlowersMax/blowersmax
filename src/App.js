import React from 'react';
import { Box, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import '@fontsource/quicksand';
import Home from './pages/home/home';
import Header from './components/navigation/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/navigation/footer';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Projects from './pages/projects/projects';
import { getFirestore } from 'firebase/firestore';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#1D3461',
      // ...
      900: '#1a202c',
    },
  },
  fonts: {
    body: 'Quicksand, sans-serif',
    heading: 'Quicksand, sans-serif',
  },
});

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MID,
  appId: process.env.REACT_APP_AID,
  measurementId: process.env.REACT_APP_MEID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fdb = getFirestore(app)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box minH='100vh'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
