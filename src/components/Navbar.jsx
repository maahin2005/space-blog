import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { RiSpaceShipFill } from 'react-icons/ri';
import { RiHomeSmileFill } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Navbar() {
  const ListeningTheIcons = ({ iconName, title, pathName }) => {
    return (
      <Link
        to={pathName}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        <Text display={'flex'} alignItems={'center'} cursor={'pointer'}>
          <Icon as={iconName} boxSize={8} title={title} />
        </Text>
      </Link>
    );
  };

  return (
    <nav>
      <Box
        width="100%"
        height="70px"
        position="fixed"
        top={0}
        p={3}
        bg={'transparent'}
        zIndex={10}
        style={{
          backdropFilter: 'blur(8px)',
        }}
      >
        <Flex
          margin={'auto'}
          width={{ base: '96%', md: '80%' }}
          bg={'transparent'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Link to={'/'}>
            <Heading>SpaceSparkles</Heading>
          </Link>
          <Flex gap={6} display={{ base: 'none', sm: 'flex' }}>
            <ListeningTheIcons
              iconName={RiHomeSmileFill}
              title={'Home'}
              pathName="/"
            />
            <ListeningTheIcons
              iconName={RiSpaceShipFill}
              title={'Blogs'}
              pathName="/blogs"
            />
            <ListeningTheIcons
              iconName={FcAbout}
              title={'About'}
              pathName="/about"
            />
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}

export default Navbar;
