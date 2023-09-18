import { Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

// Footer Component
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={[16, 8]} pt={'20'}>
      <Stack direction={['column', 'row']} alignItems={'center'} h={'full'}>

        {/* Contact Us */}
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
            <Heading fontWeight={'thin'} fontSize={['2xl', null, 'xl', '2xl']} color={'white'}>Contact Us</Heading>
            <a href='https://github.com/aashxx' target='blank'><Text fontSize={['md', null, 'sm', 'md']} color={'white'}>Aashir</Text></a>
            <Text fontSize={['md', null, 'sm', 'md']} color={'white'} mt={'-3'}>tmohamedaashir@gmail.com</Text>
            <Text fontSize={['md', null, 'sm', 'md']} color={'white'} mt={'-3'}>Chennai, India</Text>
        </VStack>

        {/* Brand Logo */}
        <VStack w={'full'} px={['0', null, '5', '40']} alignItems={['center', 'flex-start']} borderLeft={['0', '2px solid white']} borderRight={['0', '2px solid white']} my={['10', '0']}>
            <Heading fontWeight={'thin'} color={'white'}>BitHarbor</Heading>
            <Text fontSize={['lg', null, 'md','lg']} color={'white'}>Investing Starts Here!</Text>
            <Text fontSize={['sm', null, 'x-small', 'sm']}>All rights reserved &copy; 2023</Text>
        </VStack>

        {/* Social Media */}
        <VStack w={'full'}>
            <Heading fontWeight={'thin'} fontSize={['2xl', null, 'xl','2xl']} color={'white'}>Social Media</Heading>
            <HStack justifyContent={'space-evenly'}>
              <a href='https://instagram.com/mohamed_aashir_' target='blank' style={{fontSize: '2rem', color: 'white'}}><AiFillInstagram /></a>
              <a href='https://linkedin.com/in/aashxx' target='blank' style={{fontSize: '2rem', color: 'white'}}><AiFillLinkedin /></a>
              <a href='https://github.com/aashxx' target='blank' style={{fontSize: '2rem', color: 'white'}}><AiFillGithub /></a>
            </HStack>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer;
