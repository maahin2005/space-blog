import React from 'react';
import { Box, Text, Icon } from '@chakra-ui/react';
import { RiSpaceShipFill } from 'react-icons/ri';
import { RiHomeSmileFill } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Footer() {
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
        <Text
          display={'flex'}
          alignItems={'center'}
          cursor={'pointer'}
          margin={'auto'}
          width={'max-content'}
          animation="upAndDown 3s linear infinite"
          mt={{ base: 5, md: 1 }}
        >
          <Icon as={iconName} boxSize={12} title={title} />
        </Text>
        <style>
          {`
          @keyframes upAndDown {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50px);
            }
          }
        `}
        </style>
      </Link>
    );
  };

  return (
    <footer
      style={{
        width: '100%',
        padding: '20px',
        height: '280px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          'url("https://4kwallpapers.com/images/wallpapers/stars-galaxy-3840x1080-10307.jpg")',
      }}
    >
      <Box
        width={{ base: '100%', md: '80%' }}
        margin={'auto'}
        height={'100%'}
        padding={{ base: 3, md: 10 }}
      >
        <Box
          margin={'auto'}
          mt={{ base: 10, md: 2 }}
          height={'100%'}
          display={{ base: 'block', sm: 'flex' }}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          gap={20}
        >
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
        </Box>
        <Text textAlign={'center'} mb={5}>
          Copyright ©2024 spaceSparkles. All Rights Reserved.
        </Text>
      </Box>
    </footer>
  );
}

export default Footer;
