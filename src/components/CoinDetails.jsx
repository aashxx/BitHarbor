import { Box, Container, HStack, Radio, RadioGroup, VStack, Text, Img, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Button } from '@chakra-ui/react';

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CoinProgress from './CoinProgress';
import CoinDetailItem from './CoinDetailItem';
import CoinChart from './CoinChart';
import Loader from './Loader';
import ErrorPage from './ErrorPage';

import { CryptoContext } from '../contexts/CryptoContext';
import { AuthContext } from '../contexts/AuthContext';
import SubscriptionBlock from './SubscriptionBlock';

const CoinDetails = () => {

  // Context API
  const context = useContext(CryptoContext);
  const {loading, setLoading, setCoin, host, setChartArray, setErrors, errors, currency, setCurrency, coin, currencySymbol, chartArray, days, switchChartStats, days_select} = context;
  const [show, setShow] = useState(false);
  // Using the coin ID as params
  const params = useParams();

  const { user } = useContext(AuthContext);

  // Fetching Coin Info
  useEffect(()=>{
    if(params.id) {
      fetchCoin(params.id);
    }
  }, [params.id])

  const fetchCoin = async (id) => {
    try {
      setLoading(true);
      const {data} = await axios.get(`${host}/coins/${id}`);
      const {data: chartData} = await axios.get(`${host}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
      setCoin(data);
      setChartArray(chartData.prices);
      setLoading(false);
      setShow(true);
    } catch (err) {
      setErrors(true);
      setLoading(false);
    }
  }

  // Displaying error component if data does not fetch
  if(errors) {
    return <ErrorPage/>
  }

  return (
    <Container maxW={'container.lg'}>
      {
        // Loader Component
        loading ? <Loader /> : show && (
        <>
        {/* Coin Chart Component */}
        <Box mt={['10','20']}>
          <CoinChart arr={chartArray} currency={currencySymbol} days={days} />
        </Box>

        {/* Buttons to switch chart stats according to days */}
        <HStack p={'4'} wrap={'wrap'} justifyContent={'center'}>
          {
            days_select.map((day) => (
              <Button key={day} onClick={() => switchChartStats(day)}>{day}</Button>
            ))
          }
        </HStack>

        {/* Buttons to switch currency type */}
        <RadioGroup value={currency} onChange={setCurrency} m={'8'}>
          <HStack spacing={'4'} justifyContent={'center'}>
            <Radio value='inr'>INR</Radio>
            <Radio value='usd'>USD</Radio>
            <Radio value='eur'>EUR</Radio>
          </HStack>
        </RadioGroup>

        {
          user.subscription === "premium" ? (
            <VStack spacing={'4'} alignItems={'flex-start'} p={['50px 10px','16']}>

            {/* Last Updated */}
            <Text fontSize={"small"} opacity={"0.7"} alignSelf={'center'}>Last Updated on {Date(coin?.market_data.last_updated).split('G')[0]}</Text>

            {/* Coin Logo */}
            <Img src={coin?.image.large} h={'16'} w={'16'} objectFit={'contain'} />

            {/* Coin Name, Price and change percent */}
            <Stat>
              <StatLabel>{coin?.name}</StatLabel>
              <StatNumber>{currencySymbol}{coin?.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={coin?.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"}/>
                {coin?.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            {/* Coin Market Rank */}
            <Badge color={'white'} bgColor={'blackAlpha.800'} fontSize={'2xl'}>
              #{coin?.market_cap_rank}
            </Badge>

            {/* Coin Progress Bar */}
            <CoinProgress high={`${currencySymbol}${coin?.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin?.market_data.low_24h[currency]}`} />

            {/* Coin Market Info */}
            <CoinDetailItem title={'Max Supply'} value={coin?.market_data.max_supply ? coin?.market_data.max_supply : 'NA'} />
            <CoinDetailItem title={'Circulating Supply'} value={coin?.market_data.circulating_supply ? coin?.market_data.circulating_supply : 'NA'} />
            <CoinDetailItem title={'Market Capital'} value={`${currencySymbol}${coin?.market_data.market_cap[currency] ? coin?.market_data.market_cap[currency] : 'NA'}`} />
            <CoinDetailItem title={'All Time Low'} value={`${currencySymbol}${coin?.market_data.atl[currency] ? coin?.market_data.atl[currency] : 'NA'}`} /> 
            <CoinDetailItem title={'All Time High'} value={`${currencySymbol}${coin?.market_data.ath[currency] ? coin?.market_data.ath[currency] : 'NA'}`} /> 
            
          </VStack>
          ) : (
            <SubscriptionBlock message={"Purchase Premium to unlock advanced analytics for this coin"} />
          )
        }

      </>)
      }
    </Container>
  )
}

export default CoinDetails;
