import React, { useContext } from 'react';
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Avatar,
  Button,
  Icon,
} from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { blogArray } from '../helpers/blogsArray';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaBookReader } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AllContexts } from '../../Context/DataContext';

function SecondSection() {
  const navigateToReadPage = useNavigate('');
  const { setIndex } = useContext(AllContexts);
  const handleNavigationClick = (blogName, index) => {
    navigateToReadPage(`/blogs/${blogName}`);
    setIndex(index);
  };

  function AstronautCard({
    creatorName,
    blogName,
    blogDesc,
    blogImage,
    avatar_img,
    likes,
    index,
  }) {
    return (
      <Card
        maxW="md"
        bg={'#0d1b2a'}
        color="fonts.astronautSilver"
        fontWeight={700}
        margin={'auto'}
        width={{ base: '100%', md: '80%', lg: '75%' }}
        textAlign={'left'}
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={creatorName} src={avatar_img} />

              <Box>
                <Heading size="sm">{creatorName}</Heading>
                <Text>{blogName}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text noOfLines={{ base: 3, md: 4, lg: 5 }} overflow={'hidden'}>
            {blogDesc}
          </Text>
        </CardBody>
        {/* img */}
        <Image objectFit="cover" src={blogImage} alt="Chakra UI" />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Flex margin="auto" width="100%" gap={{ base: 1, md: 3 }}>
            <Button
              variant="ghost"
              color="fonts.stardustGold"
              border={'2px solid transparent'}
              _hover={{ bg: '#cccccc4b', border: '2px solid #f3f4f6' }}
            >
              <Text> {likes} </Text>
              <Icon as={FcLikePlaceholder} ml={1} boxSize={6} />
            </Button>

            <Button
              onClick={() => handleNavigationClick(blogName, index)}
              variant="ghost"
              color="fonts.stardustGold"
              border={'2px solid transparent'}
              _hover={{ bg: '#cccccc4b', border: '2px solid #f3f4f6' }}
            >
              Read... <Icon as={FaBookReader} ml={1} boxSize={5} />
            </Button>
          </Flex>
        </CardFooter>
      </Card>
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
          creatorName={blogArray[0].creatorName}
          blogName={blogArray[0].blogName}
          blogDesc={blogArray[0].blogDesc}
          blogImage={blogArray[0].blogImage}
          likes={blogArray[0].likes}
          avatar_img={blogArray[0].avatar_img}
          index={0}
        />
        <AstronautCard
          creatorName={blogArray[1].creatorName}
          blogName={blogArray[1].blogName}
          blogDesc={blogArray[1].blogDesc}
          blogImage={blogArray[1].blogImage}
          likes={blogArray[1].likes}
          avatar_img={blogArray[1].avatar_img}
          index={1}
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

// import { client } from '../../Context/sanity-client';
// { useEffect, useState }

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
