import React, { useContext } from 'react';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Flex, Avatar, Button, Icon } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import { blogArray } from '../helpers/blogsArray';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaBookReader } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AllContexts } from '../../Context/DataContext';

function LastSection() {
  const navigateToReadPage = useNavigate('');
  const { setIndex } = useContext(AllContexts);
  const handleNavigationClick = (blogName, index) => {
    navigateToReadPage(`/blogs/${blogName}`);
    setIndex(index);
  };

  function CreateCards({
    creatorName,
    blogName,
    blogDesc,
    blogImage,
    likes,
    index,
  }) {
    return (
      <>
        <Card
          maxW="md"
          bg={'#0d1b2a'}
          color="fonts.astronautSilver"
          fontWeight={700}
          margin={'auto'}
          width={{ base: '100%', md: '80%', lg: '90%' }}
          textAlign={'left'}
        >
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

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
      </>
    );
  }

  return (
    <Box p={{ base: 2, sm: 5, md: 10 }}>
      <Box width="80%" margin="auto">
        <Heading>Read Something New...</Heading>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap={10} mt={5}>
          <CreateCards
            creatorName={blogArray[0].creatorName}
            blogName={blogArray[0].blogName}
            blogDesc={blogArray[0].blogDesc}
            blogImage={blogArray[0].blogImage}
            likes={blogArray[0].likes}
            index={1}
          />
          <CreateCards
            creatorName={blogArray[1].creatorName}
            blogName={blogArray[1].blogName}
            blogDesc={blogArray[1].blogDesc}
            blogImage={blogArray[1].blogImage}
            likes={blogArray[1].likes}
            index={1}
          />
          <CreateCards
            creatorName={blogArray[1].creatorName}
            blogName={blogArray[1].blogName}
            blogDesc={blogArray[1].blogDesc}
            blogImage={blogArray[1].blogImage}
            likes={blogArray[1].likes}
            index={1}
          />
          <CreateCards
            creatorName={blogArray[1].creatorName}
            blogName={blogArray[1].blogName}
            blogDesc={blogArray[1].blogDesc}
            blogImage={blogArray[1].blogImage}
            likes={blogArray[1].likes}
            index={1}
          />
          <CreateCards
            creatorName={blogArray[1].creatorName}
            blogName={blogArray[1].blogName}
            blogDesc={blogArray[1].blogDesc}
            blogImage={blogArray[1].blogImage}
            likes={blogArray[1].likes}
            index={1}
          />
          <CreateCards
            creatorName={blogArray[1].creatorName}
            blogName={blogArray[1].blogName}
            blogDesc={blogArray[1].blogDesc}
            blogImage={blogArray[1].blogImage}
            likes={blogArray[1].likes}
            index={1}
          />
        </SimpleGrid>
        <Link to="/blogs">
          <Heading
            textAlign={'center'}
            color="fonts.stardustGold"
            mt={10}
            textDecoration="underline"
            _hover={{
              textDecoration: 'none',
              transform: 'scale(1.08)',
              transition: 'transform 1s ease-in',
            }}
          >
            Read More Blogs...
          </Heading>
        </Link>
      </Box>
    </Box>
  );
}

export default LastSection;
