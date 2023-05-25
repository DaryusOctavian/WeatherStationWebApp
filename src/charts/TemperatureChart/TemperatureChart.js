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

import './TemperatureChart.css';

function TemperatureChart({ data, time }) {
  if (!Array.isArray(time)) {
    return null;
  }

  // Create an array of objects with 'time' and 'temperature' properties
  const chartData = time.map((t, index) => ({
    time: t,
    temperature: data[index],
  }));

  return (
    <div className='TemperatureChart'>
      <p className='title'>Temperature</p>
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='natural' dataKey='temperature' stroke='#c9a326' />
      </LineChart>
    </div>
  );
}

export default TemperatureChart;
