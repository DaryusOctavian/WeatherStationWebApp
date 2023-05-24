import React from "react";
import { Line } from "react-chartjs-2";

const TemperatureChart = ({ data, time }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>Temperature Chart</h2>
      <Line
        data={{ labels: time, datasets: [{ data }] }}
        options={chartOptions}
      />
    </div>
  );
};

export default TemperatureChart;
