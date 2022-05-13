import React from 'react';
import {
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import "@fontsource/quicksand"
import Home from './pages/home/home';
import Header from './components/navigation/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/navigation/footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Projects from './pages/projects/projects';

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

const firebaseConfig = {
  apiKey: "AIzaSyCHZ5tRkUBW7Lb1-tXzy0JBLS-i31_5bNw",
  authDomain: "maxblowers-5280b.firebaseapp.com",
  projectId: "maxblowers-5280b",
  storageBucket: "maxblowers-5280b.appspot.com",
  messagingSenderId: "832724305117",
  appId: "1:832724305117:web:68ecd5fc018e082d1d8734",
  measurementId: "G-4CQQEFSP5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
