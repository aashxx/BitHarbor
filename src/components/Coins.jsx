import React, { useContext, useEffect } from 'react';

import { Button, Container, HStack, Heading, Radio, RadioGroup } from '@chakra-ui/react';

import Loader from './Loader';
import ErrorPage from './ErrorPage';
import CoinCard from './CoinCard';

import { CryptoContext } from '../contexts/CryptoContext';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SubscriptionBlock from './SubscriptionBlock';

const Coins = () => {

  // Context API
  const context = useContext(CryptoContext);
  const {coins, fetchCoins, loading, errors, currency, setCurrency, page, pages, changePage, currencySymbol} = context;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  
  // Fetching Coins
  useEffect(()=>{
    if(user) {
      fetchCoins();
    } else {
      navigate('/auth/login')
    }
    // eslint-disable-next-line.
  }, [currency, page])

  // Display Error Component if page does not fetch
  if(errors) {
    return <ErrorPage/>
  }

  return (
    <Container maxW={'container.lg'}>
      <Heading textAlign={'center'} my={'4'}>Crypto Coins</Heading>
      <RadioGroup value={currency} onChange={setCurrency} m={'8'}>
        <HStack spacing={'4'} justifyContent={'center'}>
          <Radio value='inr'>INR</Radio>
          <Radio value='usd'>USD</Radio>
          <Radio value='eur'>EUR</Radio>
        </HStack>
      </RadioGroup>

      {
        user.subscription === "free" ? 
            // Loader Component
            loading ? <Loader /> : 
            <>
            {/* Mapping Coin Cards with Fetched Coins data */}
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {
                coins.slice(0,8).map((coin)=>(
                  <CoinCard id={coin.id} key={coin.id} name={coin.name} img={coin.image} price={coin.current_price} symbol={coin.symbol} currencySymbol={currencySymbol}/>
                ))
              }
            </HStack>

            {/* Pagination */}
            <SubscriptionBlock message={"Purchase a higher plan to get rankings of all leading cryptocurrencies"} />
            </>
        
         : 

         loading ? <Loader /> : 
         <>
         {/* Mapping Coin Cards with Fetched Coins data */}
         <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
           {
             coins.map((coin)=>(
               <CoinCard id={coin.id} key={coin.id} name={coin.name} img={coin.image} price={coin.current_price} symbol={coin.symbol} currencySymbol={currencySymbol}/>
             ))
           }
         </HStack>

         {/* Pagination */}
         <HStack w={'full'} overflowX={'auto'} p={'8'}>
           {
             pages.map((item, index) => (
               <Button key={index} bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(index+1)}>
                 {index+1}
               </Button>
             ))
           }
         </HStack>
         </>
      }
    </Container>
  )
}

export default Coins;
