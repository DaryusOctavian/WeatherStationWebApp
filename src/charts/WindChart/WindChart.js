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

import './WindChart.css';

function WindChart({ data, time }) {
  if (!Array.isArray(time)) {
    return null;
  }

  // Create an array of objects with 'time' and 'pressure' properties
  const chartData = time.map((t, index) => ({
    time: t,
    wind: data[index],
  }));

  return (
    <div className='WindChart'>
      <p className='title'>Wind</p>
      <LineChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='natural' dataKey='wind' stroke='#8884d8' />
      </LineChart>
    </div>
  );
}

export default WindChart;
