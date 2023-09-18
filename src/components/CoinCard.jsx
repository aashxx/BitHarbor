import { Heading, Img, Text, VStack } from '@chakra-ui/react';

import React from 'react';
import { Link } from 'react-router-dom';

// Coin Card consists of coin logo, symbol and price
const CoinCard = ({id, name, img, symbol, price, currencySymbol = "₹"}) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack w={'52'} p={'8'} borderRadius={'lg'} shadow={'lg'} transition={'all 0.3s'} m={'4'} 
      css={
        {"&:hover": {
            transform: "scale(1.1)"
        }}
      }
      >
        {/* Coin Logo */}
        <Img src={img} w={'10'} h={'10'} objectFit={'contain'} alt='Coin' />
        {/* Coin Symbol */}
        <Heading size={'md'} noOfLines={1}>{symbol}</Heading>
        {/* Coin name */}
        <Text noOfLines={1}>{name}</Text>
        {/* Coin price with currency symbol */}
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
      </VStack>
    </Link>
  )
}

export default CoinCard;