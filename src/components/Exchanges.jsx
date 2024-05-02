import React, { useContext, useEffect } from 'react';
import { Container, HStack, Heading } from '@chakra-ui/react';

import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorPage from './ErrorPage';

import { CryptoContext } from '../contexts/CryptoContext';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Exchanges = () => {

  // Context API
  const context = useContext(CryptoContext);
  const {exchanges, fetchExchanges, loading, errors} = context;

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // Fetching exchanges
  useEffect(()=>{
    if(!user) {
      navigate('/auth/login');
    } else {
      fetchExchanges();
    }
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
        user ? (
          <>
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
          </>
        ) : (
          <h1>No user</h1>
        )
      }
    </Container>
  )
}

export default Exchanges;
