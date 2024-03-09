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
import { Navigate, useParams } from 'react-router-dom';
import { AllContexts } from '../Context/DataContext';
import { blogArray } from '../components/helpers/blogsArray';
import { FcLikePlaceholder } from 'react-icons/fc';

function SingleBlog() {
  const { index } = useContext(AllContexts);

  const blog = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  if (index === null) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Box p={{ base: 3, md: 10 }} mt={10}>
        <Container width={'80%'} margin="auto" borderY="2px solid white" py={2}>
          <Heading>{blogArray[index].blogName}</Heading>
          <Flex align="center" gap={2} my={10}>
            <Avatar name="Segun Adebayo" src={blogArray[index].Avatar} />

            <Text>{blogArray[index].creatorName} ||</Text>
            <Flex my={5} gap={1} align="center">
              <Text>{blogArray[index].likes}</Text>
              <Icon as={FcLikePlaceholder} />
            </Flex>
          </Flex>

          <Image src={blogArray[index].blogImage} />
          <Text mt={5}>{blogArray[index].blogDesc}</Text>
        </Container>
      </Box>
    </>
  );
}

export default SingleBlog;
