import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registration of Chart methods from ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CoinChart = ({arr=[], currency, days}) => {

    const prices = []; // Price variation of coin in Y - axis
    const date = []; // Days variation of coin in X - axis

    // Converting hrs to MM/DD/YYYY
    for (let i = 0; i < arr.length; i++) {
        if(days === '24h') {
            date.push(new Date(arr[i][0]).toLocaleTimeString());
        } else {
            date.push(new Date(arr[i][0]).toLocaleDateString());
        }
        prices.push(arr[i][1]);
    }

    // Dataset to be plotted in chart
    const data = {
        labels: date,
        datasets:[ {
            label: `Price in ${currency}`, // Legend
            data: prices,
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132,0.5)'
        }]
    }

    return (
        <Line options={{responsive: 'true'}} data={data} />
    )
}

export default CoinChart;
