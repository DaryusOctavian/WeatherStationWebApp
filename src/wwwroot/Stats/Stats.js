import React, { useEffect, useState } from "react";

import TemperatureChart from "../../charts/TemperatureChart/TemperatureChart";
// import PressureChart from "../../charts/PressureChart/Pressure";
import Header from "../../components/Header/Header";

function Stats() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const api_url_latest =
        "https://awu4j6hku3.execute-api.eu-central-1.amazonaws.com/dev/weather/latest";
      const api_url =
        "https://awu4j6hku3.execute-api.eu-central-1.amazonaws.com/dev/weather/hist?days=1&group=1";

      const response = await fetch(api_url);

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();

      const temps = [];
      const humidity = [];
      const wind = [];
      const pressure = [];
      const time = [];

      for (const item of data) {
        if (item.dataType === "temp") {
          temps.push(item.value);
        } else if (item.dataType === "humidity") {
          humidity.push(item.value);
        } else if (item.dataType === "wind") {
          wind.push(item.value);
        } else if (item.dataType === "pressure") {
          pressure.push(item.value);
        }

        const formattedTime = new Date(item.time).toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        if (!time.includes(formattedTime)) {
          time.push(formattedTime);
        }
      }

      renderCharts(temps, humidity, wind, pressure, time);
      console.log(temps);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderCharts = (temps, humidity, wind, pressure, time) => {
    return (
      <div className="Stats">
        <Header />
        <header className="Stats-Header">
          <p className="Header-Text">Weather Station Data</p>
        </header>
        <TemperatureChart data={temps} time={time} />
      </div>
    );
  };

  return null;
}

export default Stats;
