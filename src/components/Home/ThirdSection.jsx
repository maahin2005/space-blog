import React from 'react';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function ThirdSection() {
  function AstronautCard({ title, desc, imgSrc }) {
    return (
      <SimpleGrid
        width={{ base: '100%', md: '80%', lg: '75%' }}
        maxH="550px"
        height="fit-content"
        margin="auto"
        justifyContent={'center'}
        alignItems={'start'}
        p={{ md: 3, lg: 5 }}
        bg="transparent"
        cursor={'pointer'}
        _hover={{
          boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
          transform: 'scale(1.08)',
          transition: 'transform 1s ease-in',
        }}
      >
        <Link to={`/blogs/${title}`}>
          <Box>
            <Image src={imgSrc} margin={'auto'} alt={title} maxH={'250px'} />
          </Box>
          <Text
            p={{ base: 2, md: 2 }}
            textAlign={'left'}
            fontWeight={600}
            fontSize={{ base: '.9rem', md: '1rem' }}
            noOfLines={{ base: 6, md: 12 }}
            overflow="hidden"
            bg="#3d3d5cbc"
            borderRadius={'0 0 5px 5px'}
          >
            {desc}
          </Text>
        </Link>
      </SimpleGrid>
    );
  }

  return (
    <section
      style={{
        backgroundImage:
          'url("https://e0.pxfuel.com/wallpapers/70/724/desktop-wallpaper-simple-stars-video-background-loop-black-and-white-aesthetic-space.jpg")',

        backgroundSize: 'cover',
        backgroundPosition: 'center',

        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Heading
        fontSize={{ base: '1.4rem', sm: '1.2rem', md: '2rem', lg: '2.2rem' }}
        mt={10}
      >
        Galaxies: where stars are born and mysteries unfold
      </Heading>
      <SimpleGrid
        width={{ base: '95%', md: '100%', lg: '80%' }}
        margin="auto"
        mt={10}
        p={{ base: 3, md: 6, Lg: 10 }}
        columns={{ base: 1, md: 2 }}
        gap={{ base: 10, md: 2 }}
      >
        <AstronautCard
          desc={`"Have you ever wondered what it's like to be an astronaut? Explore
          the fascinating world of astronauts' lives in space and on Earth.
          Discover the challenges they face, the wonders they witness, and the
          dreams that drive them. Join us on a journey to understand the
          extraordinary experiences of those who venture beyond our world.
          What secrets do the stars hold? What does it feel like to float in
          zero gravity? Find out as we delve into the captivating lives of
          astronauts.`}
          imgSrc="https://usagif.com/wp-content/uploads/gify/galaxy-blue-snowy-stars-spinning-usagif.gif"
          title="blog1"
        />
        <AstronautCard
          desc={`"Have you ever wondered what it's like to be an astronaut? Explore
          the fascinating world of astronauts' lives in space and on Earth.
          Discover the challenges they face, the wonders they witness, and the
          dreams that drive them. Join us on a journey to understand the
          extraordinary experiences of those who venture beyond our world.
          What secrets do the stars hold? What does it feel like to float in
          zero gravity? Find out as we delve into the captivating lives of
          astronauts.`}
          imgSrc="https://cdn.pixabay.com/animation/2023/01/24/23/10/23-10-04-56_512.gif"
          title="blog2"
        />
      </SimpleGrid>
      <Link to="/blogs">
        <Heading
          color="fonts.stardustGold"
          mt={10}
          textDecoration="underline"
          _hover={{
            textDecoration: 'none',
            transform: 'scale(1.08)',
            transition: 'transform 1s ease-in',
          }}
        >
          Explore More...
        </Heading>
      </Link>
    </section>
  );
}

export default ThirdSection;
