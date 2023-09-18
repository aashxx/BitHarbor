import { Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';

// Exchange Card consists of logo, rank and name
const ExchangeCard = ({name, img, rank, url}) => {
  return (
    <a href={url} target='blank'>
      <VStack w={'52'} p={'8'} borderRadius={'lg'} shadow={'lg'} transition={'all 0.3s'} m={'4'} 
      css={
        {"&:hover": {
            transform: "scale(1.1)"
        }}
      }
      >
        <Img src={img} w={'10'} h={'10'} objectFit={'contain'} alt='Exchange' />
        <Heading size={'md'} noOfLines={1}>{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  )
}

export default ExchangeCard;
