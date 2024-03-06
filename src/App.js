import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './Themes/darkTheme';
import Navbar from './components/Navbar';
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <PublicRoutes />
    </ChakraProvider>
  );
}

export default App;
