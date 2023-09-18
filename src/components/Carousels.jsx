import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Carousels on Home Component
const HomeCarousel = () => {

    return (
        <Box w={['full', '80%']} m={'100px auto'}>
            <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
                <Box w={'full'} h={['150px','400px']}>
                    <Image filter={'grayscale(1)'} borderRadius={'15px'} maxH={'100%'} maxW={'100%'} src={'https://img.freepik.com/premium-photo/stock-market-forex-trading-graph_73426-190.jpg?w=900'}/>
                </Box>
                <Box w={'full'} h={['150px','400px']}>
                    <Image filter={'grayscale(1)'} borderRadius={'15px'} maxH={'100%'} maxW={'100%'} src={'https://img.freepik.com/free-vector/exchange-bitcoin-neon-style-text-pick-bitcoin-brick-wall-background_1262-13432.jpg?w=826&t=st=1694967977~exp=1694968577~hmac=dad46b0a9583f715871544e8478c86e5b0597504dab71906a9c05d64013a3e27'}/>
                </Box>
                <Box w={'full'} h={['150px','400px']}>
                    <Image filter={'grayscale(1)'} borderRadius={'15px'} maxH={'100%'} maxW={'100%'} src={'https://img.freepik.com/premium-photo/bitcoins-blockchain-technology-background_398492-7070.jpg?w=996'}/>
                </Box>
                <Box w={'full'} h={['150px','400px']}>
                    <Image filter={'grayscale(1)'} borderRadius={'15px'} maxH={'100%'} maxW={'100%'} src={'https://img.freepik.com/premium-photo/office-business-woman-look-bitcoin-btc-cryptocurrency-as-saving-bank-account-finance-exchange-trade-digital-money-technology-cash-person-invest-electronic-online-payment-money-market_121764-6648.jpg?w=996'}/>
                </Box>
            </Carousel>
        </Box>
    )
}


export default HomeCarousel;
