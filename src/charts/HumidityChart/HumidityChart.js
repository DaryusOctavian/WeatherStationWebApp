import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import './HumidityChart.css';

function HumidityChart({ data, time }) {
  if (!Array.isArray(time)) {
    return null;
  }

  // Create an array of objects with 'time' and 'pressure' properties
  const chartData = time.map((t, index) => ({
    time: t,
    humidity: data[index],
  }));

  return (
    <div className='HumidityChart'>
      <p className='title'>Humidity</p>
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='natural' dataKey='humidity' stroke='#03730f' />
      </LineChart>
    </div>
  );
}

export default HumidityChart;
