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
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaBookReader } from 'react-icons/fa';
import { AllContexts } from '../../Context/DataContext';
import { blogArray } from '../helpers/blogsArray';

const CreateCards = ({
  creatorName,
  blogName,
  blogDesc,
  blogImage,
  likes,
  avatar_img,
  index,
  onClick,
}) => (
  <Box
    maxW="md"
    bg="#0d1b2a"
    color="fonts.astronautSilver"
    fontWeight={700}
    margin="auto"
    width={{ base: '100%', md: '80%', lg: '100%' }}
    textAlign="left"
    minH="400px" // Set a minimum height for each card
    borderRadius="lg" // Add border radius for a more polished look
    boxShadow="lg" // Add shadow for depth
    p={4} // Add padding for spacing
    transition="transform 0.3s, box-shadow 0.3s" // Add transition for smoother hover effect
    _hover={{ transform: 'scale(1.03)', boxShadow: 'xl' }} // Add hover effect
  >
    <Flex alignItems="center" mb={4}>
      <Avatar name={creatorName} src={avatar_img} mr={2} />
      <Text fontSize="sm">{creatorName}</Text>
    </Flex>
    <Heading size="sm" mb={2} noOfLines={1}>
      {blogName}
    </Heading>
    <Text fontSize="md" noOfLines={{ base: 3, md: 4, lg: 5 }} mb={4}>
      {blogDesc}
    </Text>
    <Image src={blogImage} alt="Chakra UI" mb={4} borderRadius="md" />
    <Flex justify="space-between" alignItems="center">
      <Button
        variant="ghost"
        color="fonts.stardustGold"
        leftIcon={<FcLikePlaceholder />}
        fontSize="sm"
      >
        {likes}
      </Button>
      <Button
        onClick={onClick}
        variant="ghost"
        color="fonts.stardustGold"
        rightIcon={<FaBookReader />}
        fontSize="sm"
      >
        Read...
      </Button>
    </Flex>
  </Box>
);

function LastSection() {
  const navigateToReadPage = useNavigate('');
  const { setIndex } = useContext(AllContexts);
  const handleNavigationClick = (blogName, index) => {
    navigateToReadPage(`/blogs/${blogName}`);
    setIndex(index);
  };

  return (
    <Box p={{ base: 2, sm: 5, md: 10 }}>
      <Box width="80%" margin="auto">
        <Heading textAlign="center" mb={5}>
          Read Something New...
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap={5}>
          {blogArray.slice(0, 6).map((blog, index) => (
            <CreateCards
              key={index}
              creatorName={blog.creatorName}
              blogName={blog.blogName}
              blogDesc={blog.blogDesc}
              blogImage={blog.blogImage}
              likes={blog.likes}
              avatar_img={blog.avatar_img}
              index={index + 1}
              onClick={() => handleNavigationClick(blog.blogName, index)}
            />
          ))}
        </SimpleGrid>
        <Link to="/blogs">
          <Heading
            textAlign="center"
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
