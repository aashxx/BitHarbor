import { Heading, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineLockClock } from 'react-icons/md';

const SubscriptionBlock = ({ message }) => {
  return (
    <VStack w={'full'} my={'20'} spacing={'6'}>
        <Img
            src="/favicon.png"
            alt="BitHarbor"
            mx={"auto"}
            h={"20"}
            w={"20"}
            objectFit={"contain"}
        />
        <Heading fontSize={'9xl'}>
            <MdOutlineLockClock />
        </Heading>
        <Heading textAlign={'center'}>
            Upgrade your plan
        </Heading>
        <Text textAlign={'center'}>
            {message}
        </Text>
    </VStack>
  )
}

export default SubscriptionBlock;
