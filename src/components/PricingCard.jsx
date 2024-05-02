import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from "react-icons/fa";

const PricingCard = ({ name, description, price, billed, link, heading, features }) => {
  return (
    <Card bgColor={'transparent'} h={'484px'} w={'250px'} color={'white'} borderRadius={'lg'} border={'2px solid white'}>
      <CardHeader>
        <Heading>{name}</Heading>
        <Text color={'gray'}>{description}</Text>
      </CardHeader>
      <CardBody>
        <Heading>{price}</Heading>
        <Text color={'gray'}>{billed}</Text>
        <Button variant={'ghost'} my={2} w={'full'} bgColor={'white'}>
          <a href={link}>
            Try Now
          </a>
        </Button>
      </CardBody>
      <CardFooter>
        <VStack>
          <Text fontWeight={'bold'}>{heading}</Text>
          <List >
            {
              features.map((feature) => (
                <ListItem key={feature}>
                  <ListIcon as={FaCheckCircle} color={'white'} />
                  {feature}
                </ListItem>
              ))
            }
          </List>
        </VStack>
      </CardFooter>
    </Card>
  )
}

export default PricingCard;