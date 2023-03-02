import React from 'react';
import { Line } from 'react-chartjs-2';
import './Chart_umi.css';
// import { GetNumbers} from './input';

import {
  Chart as chartjs,
  LineElement,
  CategoryScale, // x scale
  LinearScale, // y scale
  PointElement
} from 'chart.js';
import { classNames } from '@syncfusion/ej2/buttons';

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

// const GetData = await GetNumbers();

// const arr = [4, 5, 3, 7, 8 ];

function Chart_umi() {
  const data = {
    labels : ['01:00', '02:00','03:00', '04:00','05:00', '06:00','07:00', '08:00','09:00', '10:00'],
    datasets: [{
      labels: 'Sales of the week',
      data: [3, 5, 6, 7, 4, 7, 1, 2, 8, 6],
      backgroundColor: 'aqua',
      borderColor: 'black',
      pointBorderColor: 'aqua'
      }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        min: 0,
        max: 10
      },
      x:{
        min: 0,
        max: 12
      }
    }
  }
  
  return (
    <div className="Chart_umi">
      <h1>Umiditate</h1>
      <Line
        data = {data}
        options = {options}
      ></Line>
    </div>
  );
}

export default Chart_umi; 