import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, VStack, Heading, Box } from '@chakra-ui/react';

// Frequently Asked Questions
const FAQ = () => {
  return (
    <VStack justifyContent={'center'} mt={['40', '20']}>
        <Heading color={'white'} fontWeight={'thin'} fontSize={['3xl', '4xl']} textAlign={'center'}>Frequently Asked Questions</Heading>
        <Box border={'2px solid white'} borderRadius={'15px'} w={['full','80%']} p={'5'} my={'10'}>
            <Accordion w={'full'}>

                {/* Accordion One */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                What are the functionalities of this app?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        BitHarbor analyzes realtime market capital and overall market charts for all the available cryptocurrencies. It helps you to plan your investments by providing analysis about all cryptocurrencies.
                    </AccordionPanel>
                </AccordionItem>

                {/* Accordion Two */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Are all the cryptocurrency data available?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Yes, you can view information of more than 13200 cryptocurrencies.
                    </AccordionPanel>
                </AccordionItem>

                {/* Accordion Three */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Can I view the analysis respective to the my country's currency?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Yes, you can view the analysis in INR, USD and EUR.
                    </AccordionPanel>
                </AccordionItem>

                {/* Accordion Four */}
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                How is this application developed?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        It is built using React and Chakra UI. It uses an external CoinGecko API to fetch realtime information. It uses ChartJS to display the market charts.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    </VStack>
  )
}

export default FAQ;
