import React from 'react';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { client } from '../../Context/sanity-client';
// { useEffect, useState }

function SecondSection() {
  function AstronautCard({ title, desc, imgSrc }) {
    return (
      <SimpleGrid
        width={{ base: '100%', md: '80%', lg: '75%' }}
        height="fit-content"
        margin="auto"
        justifyContent={'center'}
        alignItems={'start'}
        p={{ md: 3, lg: 5 }}
        bg="transparent"
        cursor={'pointer'}
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        _hover={{
          boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
          transform: 'scale(1.08)',
          transition: 'transform 1s ease-in',
        }}
      >
        <Link to={`/blogs/${title}`}>
          <Box>
            <Image src={imgSrc} margin={'auto'} alt={title} />
          </Box>
          <Text
            p={{ base: 2, md: 2 }}
            textAlign={'left'}
            fontWeight={600}
            fontSize={{ base: '.9rem', md: '1rem' }}
            noOfLines={{ base: 8, md: 15 }}
            overflow="scroll"
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

        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Heading
        fontSize={{ base: '1.4rem', sm: '1.2rem', md: '2rem', lg: '2.2rem' }}
      >
        Ever thought about what astronauts' lives are like?
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
          imgSrc="/Images/astro-swim.gif"
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
          imgSrc="/Images/astro-diaries-2.gif"
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

export default SecondSection;

// const [data, setData] = useState([]);

// async function getData() {
//   await client
//     .fetch('*[_type == "Space"]{title,body,author,readTime}')
//     .then(data => {
//       setData(data);
//       console.log('data: ', data);
//     })
//     .catch(error => console.error(error));
// }

// useEffect(() => {
//   getData();
//   console.log('data.images: ', data[0].images);
// }, []);

// ----------------------------------------------------------------------------------------

// {
//   /* {data.map((el)=> <AstronautCard desc={el.body.}/>)} */
// }

// {
//   /* {data.map((item, index) => (
//           <AstronautCard
//             key={index}
//             title={item.title}
//             desc={item.body[0].children[0].text}
//             // imgSrc={item?.images[0].asset._ref}
//           />
//         ))} */
// }
