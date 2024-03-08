import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './Themes/darkTheme';
import Navbar from './components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <PublicRoutes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
