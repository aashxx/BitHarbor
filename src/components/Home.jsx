import { Box, Heading, Image, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import bgImg from '../assets/btc.png';
import { motion } from 'framer-motion';
import Carousels from './Carousels';
import FAQ from './FAQ';

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={['8', '16']} py={[16, 8]}>
      {/* BitCoin Image */}
      <motion.div style={{height: '80vh'}} animate={{translateY: '20px'}} transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}}>
        <Image src={bgImg} w={'full'} h={['50vh','70vh']} objectFit={'contain'} filter={'grayscale(1)'} />
      </motion.div>

      {/* Brand Name */}
      <Text fontSize={['4xl','6xl']} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mb={['20','40']} mt={['-40','-20']} >BitHarbor</Text>

      {/* About Us */}
      <Stack mx={['0', null, '0', '40']} direction={['column-reverse', 'row']} justifyContent={'space-between'}>
        <Box w={['full','400px']} mt={['10', null, '10','20']}>
          <Heading textAlign={['center', 'left']} color={'white'} fontWeight={'thin'} mb={'5'}>Empower Your Investment Strategies !</Heading>
          <Text textAlign={['center', 'left']} mb={'5'}>Gain information about cryptocurrency exchanges and coins in order to plan your investments efficiently.</Text>
          <Text textAlign={['center', 'left']}>BitHarbor analyzes realtime market capital and overall market charts for all the available cryptocurrencies.</Text>
        </Box>
        <Box h={[null, null, '400px','500px']} w={[null, null, '230px','330px']}>
          <Image filter={'grayscale(1)'} maxH={'100%'} borderRadius={'15px'} maxW={'100%'} src='https://img.freepik.com/free-photo/businessman-standing-with-icons_53876-24914.jpg?w=360&t=st=1694977981~exp=1694978581~hmac=1df484f0de1cae122818976a5b5201ce03ea19c7c9dec30b880b0a45b028dae5' />
        </Box>
      </Stack>

      {/* FAQ Component */}
      <FAQ />

      {/* Carousels Component */}
      <Carousels />
    </Box>
  )
}

export default Home;
