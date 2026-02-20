// PnLChart.tsx
// A component for visualization of Profit and Loss (PnL)

import React from 'react';
import { Line } from 'react-chartjs-2';

const PnLChart = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.date),
        datasets: [{
            label: 'Profit and Loss',
            data: data.map(entry => entry.pnl),
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
        }],
    };

    return <Line data={chartData} />;
};

export default PnLChart;