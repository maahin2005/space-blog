import React from 'react';
import { ChakraProvider, theme, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading textAlign={'center'}>Space Blog Website by Mahin</Heading>
    </ChakraProvider>
  );
}

export default App;
