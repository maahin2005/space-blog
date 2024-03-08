import React, { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  Flex,
  Avatar,
  Heading,
  Text,
  Image,
  Button,
  Icon,
  Select,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaBookReader } from 'react-icons/fa';
import { useState } from 'react';

function AllBlogs() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const [blogs, setBlogs] = useState([
    {
      creatorName: 'Segun Adebayo',
      blogName: 'Creator, Chakra UI',
      blogDesc:
        'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
      blogImage:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      likes: Math.floor(Math.random() * 500),
    },
    {
      creatorName: 'Segun Adebayo',
      blogName: 'Creator, Chakra UI',
      blogDesc:
        'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
      blogImage:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      likes: Math.floor(Math.random() * 500),
    },
    {
      creatorName: 'Segun Adebayo',
      blogName: 'Creator, Chakra UI',
      blogDesc:
        'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
      blogImage:
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      likes: Math.floor(Math.random() * 500),
    },
    // Add more blogs here
  ]);

  const CreateBlogsCarts = ({
    creatorName,
    blogName,
    blogDesc,
    blogImage,
    likes,
  }) => {
    return (
      <Card
        maxW="md"
        bg={'#0d1b2a'}
        color="fonts.astronautSilver"
        fontWeight={700}
      >
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">{creatorName}</Heading>
                <Text>{blogName}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text noOfLines={{ base: 4, md: 6, lg: 8 }} overflow={'hidden'}>
            {blogDesc}
          </Text>
        </CardBody>
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
          <Flex margin="auto" width="100%" gap={3}>
            <Button variant="ghost" color="fonts.stardustGold">
              <Text> {likes} </Text>
              <Icon as={FcLikePlaceholder} ml={1} boxSize={6} />
            </Button>
            <Button variant="ghost" color="fonts.stardustGold">
              Share
            </Button>
            <Button variant="ghost" color="fonts.stardustGold">
              Let's Read... <Icon as={FaBookReader} ml={1} boxSize={5} />
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    );
  };

  const handleChangeLikes = e => {
    if (e.target.value === 'higher') {
      setBlogs([...blogs].sort((a, b) => b.likes - a.likes));
    } else if (e.target.value === 'lower') {
      setBlogs([...blogs].sort((a, b) => a.likes - b.likes));
    }
  };

  return (
    <Box p={{ base: 1, sm: 5, md: 7, lg: 10 }} mt={10}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2 }}
        width={'50%'}
        margin="auto"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading
          textAlign={'center'}
          my={6}
          color="fonts.stardustGold"
          justifySelf={'center'}
        >
          More Stories Await
        </Heading>
        <Select
          placeholder={`How many Likes? 🤔`}
          width={'fit-content'}
          bg={'transparent'}
          justifySelf={'end'}
          onChange={handleChangeLikes}
        >
          <option
            value="higher"
            style={{
              color: '#111',
              fontWeight: 'bold',
              fontFamily: 'Space Grotesk',
            }}
          >
            Higher Likes
          </option>
          <option
            value="lower"
            style={{
              color: '#111',
              fontWeight: 'bold',
              fontFamily: 'Space Grotesk',
            }}
          >
            Lower Likes
          </option>
        </Select>
      </SimpleGrid>
      <SimpleGrid
        width={{ base: '90%', md: '80%' }}
        margin="auto"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: 3, md: 2, lg: 5 }}
      >
        {blogs.map((el, i) => (
          <CreateBlogsCarts
            key={i}
            creatorName={el.creatorName}
            blogName={el.blogName}
            blogDesc={el.blogDesc}
            blogImage={el.blogImage}
            likes={el.likes}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default AllBlogs;
