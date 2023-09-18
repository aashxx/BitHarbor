import React, { useContext, useEffect } from 'react';
import { Container, HStack, Heading } from '@chakra-ui/react';

import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorPage from './ErrorPage';

import { CryptoContext } from '../contexts/CryptoContext';

const Exchanges = () => {

  // Context API
  const context = useContext(CryptoContext);
  const {exchanges, fetchExchanges, loading, errors} = context;

  // Fetching exchanges
  useEffect(()=>{
    fetchExchanges();
    // eslint-disable-next-line.
  }, [])

  // Display error component if data does not fetch
  if(errors) {
    return <ErrorPage/>
  }

  return (
    <Container maxW={'container.lg'}>
      <Heading textAlign={'center'} my={'4'}>Crypto Exchanges</Heading>
      {
        // Loader component
        loading ? <Loader /> : 

        // Mapping Exchanges Card with fetched exchanges data
        <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
          {
            exchanges.map((exchange)=>(
              <ExchangeCard key={exchange.id} name={exchange.name} img={exchange.image} rank={exchange.trust_score_rank} url={exchange.url}/>
            ))
          }
        </HStack>
      }
    </Container>
  )
}

export default Exchanges;
