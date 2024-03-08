import React from 'react';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function LastSection() {
  function CreateCards({ title, imgSrc, desc }) {
    return (
      <Box
        maxH={'fit-content'}
        cursor={'pointer'}
        p={3}
        boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        _hover={{
          boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
          transform: 'scale(1.08)',
          transition: 'transform 1s ease-in',
        }}
      >
        <Link to={`/blogs/${title}`}>
          <Box>
            <Image src={imgSrc} />
          </Box>
          <Box
            p={{ base: 2, md: 2 }}
            textAlign={'left'}
            fontWeight={600}
            fontSize={{ base: '.9rem', md: '1rem' }}
            noOfLines={{ base: 8, md: 15 }}
            overflow="scroll"
            bg="#3d3d5cbc"
            borderRadius={'0 0 5px 5px'}
          >
            <Text>{title}</Text>
            <Text noOfLines={{ base: 6, md: 10 }} overflow="hidden">
              {desc}
            </Text>
          </Box>
        </Link>
      </Box>
    );
  }

  return (
    <Box p={{ base: 2, sm: 5, md: 10 }}>
      <Box width="80%" margin="auto">
        <Heading>Read Something New...</Heading>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap={10} mt={5}>
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
          />
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
          />
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
          />
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
          />
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
          />
          <CreateCards
            imgSrc="https://usagif.com/wp-content/uploads/gifs/starfall-gif-42.gif"
            title={'xyz'}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae sint maiores optio voluptates? Cupiditate sit possimus dolorem eius, dicta vitae tenetur hic non ipsam repellat quae sunt eligendi?
            Excepturi, itaque laboriosam? Voluptas fugit corporis ad nemo aspernatur provident officia, perferendis fugiat dolore hic aperiam odit eum iusto totam commodi fuga, dolor est sint amet sequi ipsam ducimus dolorem?"
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
