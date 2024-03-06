import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function Home() {
  return (
    <Box
      height={{ base: '100vh', sm: '60vh', lg: '100vh' }}
      bgImage={'https://i.makeagif.com/media/8-11-2018/jET9FZ.gif'}
      bgSize="cover"
      bgPos="center"
    >
      <Box width={'100%'} height={'90%'}>
        <SimpleGrid
          width={{ base: '100%', sm: '80%' }}
          margin={'auto'}
          height={'100%'}
          p={{ base: 3, sm: 6, md: 10 }}
          alignItems={'center'}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 0, sm: 20 }}
          justifyContent={'center'}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text
            fontSize={{
              base: '1.2rem',
              sm: '1.3rem',
              md: '1.3rem',
              lg: '2rem',
            }}
            textAlign={{ base: 'center', md: 'left' }}
            mt={{ base: 3, sm: 5, md: 2 }}
          >
            Space,
            <br /> the great unknown,
            <br /> where the mind soars and the heart dreams.
          </Text>
          <Box width={{ base: '100%', sm: '80%', md: '100%' }}>
            <Image
              width={'100%'}
              alt="astro"
              src="./Images/astronaut.png"
              animation="upAndDown 3s linear infinite"
            />
            <style>
              {`
          @keyframes upAndDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50px);
            }
          }
        `}
            </style>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
