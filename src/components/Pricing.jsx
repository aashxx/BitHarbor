import React from 'react';
import { VStack, Heading, Stack } from '@chakra-ui/react';
import PricingCard from './PricingCard';
import { PLANS } from '../lib/constants';

// Frequently Asked Questions
const Pricing = () => {
  return (
    <VStack justifyContent={'center'} mt={['40', '20']}>
        <Heading color={'white'} fontWeight={'thin'} fontSize={['3xl', '4xl']} textAlign={'center'}>Our Subcription Plans</Heading>
        <Stack direction={["column", "row"]} justifyContent={['center', 'space-evenly' ]} gap={'10'} alignItems={'center'} w={['250px','80%']} p={'5'} my={'10'}>
            {
                PLANS.map((plan) => (
                    <PricingCard key={plan.name} name={plan.name} description={plan.description} link={plan.link} buttonText={plan.buttonText} price={plan.price} billed={plan.billed} heading={plan.heading} features={plan.features} />
                ))
            }
        </Stack>
    </VStack>
  )
}

export default Pricing;
