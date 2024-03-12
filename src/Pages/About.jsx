import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Box p={20}>
      <Box width={'80%'} margin={'auto'} mt={10}>
        <Heading>Created by Mahin Malek</Heading>

        <Text>SpaceSparkles - Space Blogs </Text>
        <Text> Thanks for visiting </Text>
      </Box>
    </Box>
  );
}

export default About;
