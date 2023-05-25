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

import './PressureChart.css';

function PressureChart({ data, time }) {
  if (!Array.isArray(time)) {
    return null;
  }

  // Create an array of objects with 'time' and 'pressure' properties
  const chartData = time.map((t, index) => ({
    time: t,
    pressure: data[index],
  }));

  return (
    <div className='PressureChart'>
      <p className='title'>Pressures</p>
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='natural' dataKey='pressure' stroke='#d4360b' />
      </LineChart>
    </div>
  );
}

export default PressureChart;
