import React, { useContext, useEffect } from 'react';
import {
  Box,
  Heading,
  Container,
  Avatar,
  Flex,
  Text,
  Image,
  Icon,
} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import { AllContexts } from '../Context/DataContext';
// import { blogArray } from '../components/helpers/blogsArray';
import { FcLikePlaceholder } from 'react-icons/fc';
// import getData from '../components/helpers/sanityData';

function SingleBlog() {
  const { index, sanityData } = useContext(AllContexts);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    // console.log(sanityData[index].body[0].children[2].text);
  }, []);

  if (index === null) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Box p={{ base: 3, md: 10 }} mt={10}>
        <Container width={'80%'} margin="auto" borderY="2px solid white" py={2}>
          <Heading>{sanityData[index].title}</Heading>
          <Flex align="center" gap={2} my={10}>
            <Avatar name="Segun Adebayo" src={sanityData[index].author.pic} />

            <Text>{sanityData[index].author.name} ||</Text>
            <Flex my={5} gap={1} align="center">
              <Icon as={FcLikePlaceholder} />
            </Flex>
          </Flex>

          <Image src={sanityData[index].img} />
          <Text mt={5} lineHeight={8} letterSpacing={1}>
            {/* {sanityData[index].body.map(el => el.map(el => el.text))} */}
            {sanityData[index].body[0].children.map(el => el.text)}
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default SingleBlog;
