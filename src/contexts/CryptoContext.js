import React, { createContext, useState } from 'react';
import axios from 'axios';

// Creating context
export const CryptoContext = createContext();

const CryptoState = (props) => {

    // API host
    const host = 'https://api.coingecko.com/api/v3';

    // Loaders and Error Handlers
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(false);

    // Fetching data for crypto exchanges
    const [exchanges, setExchanges] = useState([]);
    const fetchExchanges = async () => {
        try {
            const {data} = await axios.get(`${host}/exchanges`);
            setExchanges(data);
            setLoading(false);
        } catch (err) {
            setErrors(true);
            setLoading(false);
        }
    }

    // Fetching data for crypto coins
    const [coins, setCoins] = useState([]);

    // Type of currency
    const [currency, setCurrency] = useState('inr');

    // Currency Symbol    
    const currencySymbol = currency === 'inr' ? "₹" : currency === 'eur' ? "€" : "$";

    // Pagination
    const [page, setPage] = useState(1);
    const pages = new Array(101).fill(1);

    // Method for changing pages
    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }

    // Fetching coins method
    const fetchCoins = async () => {
        try {
            const {data} = await axios.get(`${host}/coins/markets?vs_currency=${currency}&page=${page}`);
            setCoins(data);
            setLoading(false);
        } catch (err) {
            setErrors(true);
            setLoading(false);
        }
    }

    // Coin info
    const [coin, setCoin] = useState({});

    // Chart Data requied for the no. of days
    const [days, setDays] = useState('24h');

    // Chart data 
    const [chartArray, setChartArray] = useState([]);

    // Method for fetching coin info and chart info
    const fetchCoin = async (id) => {
        try {
            const {data} = await axios.get(`${host}/coins/${id}`);
            const {data: chartData} = await axios.get(`${host}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
            setCoin(data);
            setChartArray(chartData.prices);
            setLoading(false);
        } catch (err) {
            setErrors(true);
            setLoading(false);
        }
    }
    
    // Switch Chart Stats for respective days
    const days_select = ['24h', '7d', '14d', '30d', '60d', '200d', '1y', 'max'];

    // Method to switch days
    const switchChartStats =(day) => {
        switch (day) {
            case '24h':
                setDays('24h');
                break;
            
            case '7d':
                setDays('7d');
                break;
            
            case '14d':
                setDays('14d');
                break;

            case '30d':
                setDays('30d');
                break;

            case '60d':
                setDays('60d');
                break; 

            case '200d':
                setDays('200d');
                break;

            case '1y':
                setDays('365d');
                break;    

            case 'max':
                setDays('max');
                break;                 
        }
    }

    return (
        <CryptoContext.Provider value={{loading, errors, exchanges, fetchExchanges, coins, currency, setCurrency, currencySymbol, page, pages, fetchCoins, changePage, coin, fetchCoin, chartArray, days, switchChartStats, days_select}}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoState;
