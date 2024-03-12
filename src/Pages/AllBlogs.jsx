import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { AllContexts } from '../Context/DataContext';
// import { blogArray } from '../components/helpers/blogsArray';
import getData from '../components/helpers/sanityData';

function AllBlogs() {
  const navigateToReadPage = useNavigate();
  const { setIndex, sanityData, setSanityData } = useContext(AllContexts);
  const [blogs, setBlogs] = useState(sanityData);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    setIndex(null);
  }, []);

  useEffect(() => {
    getData()
      .then(data => {
        console.log('data: ', data);
        // Handle the data
        setSanityData(data);
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
  }, [setSanityData]);

  const handleNavigationClick = (blogName, index) => {
    navigateToReadPage(`/blogs/${blogName}`);
    setIndex(index);
  };

  const handleChangeLikes = e => {
    if (e.target.value === 'higher') {
      setBlogs([...blogs].sort((a, b) => b.likes - a.likes));
    } else if (e.target.value === 'lower') {
      setBlogs([...blogs].sort((a, b) => a.likes - b.likes));
    }
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Box p={{ base: 1, sm: 5, md: 7, lg: 10 }} mt={10}>
      <SimpleGrid
        columns={1}
        width={'100%'}
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
          justifySelf={'center'}
          onChange={handleChangeLikes}
          mb={10}
        >
          <option value="higher">Higher Likes</option>
          <option value="lower">Lower Likes</option>
        </Select>
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
        />
      </SimpleGrid>
      <SimpleGrid
        width={{ base: '90%', md: '80%' }}
        margin="auto"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={{ base: 3, md: 2, lg: 5 }}
      >
        {currentBlogs.map((el, i) => (
          <CreateBlogsCards
            key={i}
            creatorName={el.author.name}
            blogName={el.title}
            blogDesc={el.body[0].children[0].text}
            blogImage={el.img}
            likes={Math.floor(Math.random() * 2000)}
            avatar_img={el.author.pic}
            index={i}
            handleNavigationClick={handleNavigationClick}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const CreateBlogsCards = ({
  creatorName,
  blogName,
  blogDesc,
  blogImage,
  avatar_img,
  likes,
  index,
  handleNavigationClick,
}) => (
  <Card maxW="md" bg={'#0d1b2a'} color="fonts.astronautSilver" fontWeight={700}>
    <CardHeader pb={0}>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src={avatar_img} />
          <Box>
            <Heading size="sm">{creatorName}</Heading>
          </Box>
        </Flex>
      </Flex>
      <Heading
        size="md"
        mt={4}
        noOfLines={2}
        overflow={'hidden'}
        color={'fonts.lunarWhite'}
      >
        {blogName}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text noOfLines={{ base: 4, md: 5, lg: 6 }} overflow={'hidden'}>
        {blogDesc}
      </Text>
    </CardBody>
    <Image objectFit="cover" src={blogImage} alt="Chakra UI" />
    <CardFooter justify="space-between" flexWrap="wrap">
      <Flex margin="auto" width="100%" gap={3}>
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
          variant="ghost"
          color="fonts.stardustGold"
          border={'2px solid transparent'}
          _hover={{ bg: '#cccccc4b', border: '2px solid #f3f4f6' }}
        >
          Share
        </Button>
        <Button
          onClick={() => handleNavigationClick(blogName, index)}
          variant="ghost"
          color="fonts.stardustGold"
          border={'2px solid transparent'}
          _hover={{ bg: '#cccccc4b', border: '2px solid #f3f4f6' }}
        >
          Let's Read... <Icon as={FaBookReader} ml={1} boxSize={5} />
        </Button>
      </Flex>
    </CardFooter>
  </Card>
);

const Pagination = ({ blogsPerPage, totalBlogs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justifyContent="center" mb={5}>
      {pageNumbers.map(number => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          mr={2}
          colorScheme="teal"
        >
          {number}
        </Button>
      ))}
    </Flex>
  );
};

export default AllBlogs;
