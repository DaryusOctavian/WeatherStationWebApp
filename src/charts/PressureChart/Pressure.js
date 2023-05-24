import React from "react";
import { Line } from "react-chartjs-2";

function PressureChart({ data }) {
  return (
    <Line
      data={{
        labels: data.time,
        datasets: [
          {
            label: "Pressure",
            data: data.pressure,
            borderColor: "orange",
            fill: false,
          },
        ],
      }}
    />
  );
}

export default PressureChart;
