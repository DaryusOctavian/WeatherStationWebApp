import React, { useEffect, useState } from "react";

import TemperatureChart from "../../charts/TemperatureChart/TemperatureChart";
import PressureChart from "../../charts/PressureChart/PressureChart";
import WindChart from "../../charts/WindChart/WindChart";
import HumidityChart from "../../charts/HumidityChart/HumidityChart";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Stats.css";

function Stats() {
  const [temps, setTemp] = useState([]);
  const [times, setTime] = useState([]);
  const [pressures, setPressure] = useState([]);
  const [winds, setWind] = useState([]);
  const [humiditys, setHumidity] = useState([]);

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

      const temp = [];
      const humidity = [];
      const wind = [];
      const pressure = [];
      const time = [];

      for (const item of data) {
        if (item.dataType === "temp") {
          temp.push(item.value);
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

        setTemp(temp);
        setTime(time);
        setPressure(pressure);
        setHumidity(humidity);
        setWind(wind);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="Stats">
      <Header />
      <header className="Stats-Header">
        <p className="Header-Text">Weather Station Data</p>
      </header>
      <TemperatureChart data={temps} time={times} />
      <PressureChart data={pressures} time={times} />
      <WindChart data={winds} time={times} />
      <HumidityChart data={humiditys} time={times} />
      <Footer />
    </div>
  );
}

export default Stats;
