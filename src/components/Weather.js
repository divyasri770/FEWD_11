// src/components/Weather.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = 'e5532bd243eb4139147238f9c16933e4'; // Replace with your real API key
  const CITY = 'Hyderabad'; // Change city as needed

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeather(res.data);
      } catch (err) {
        console.error('Error fetching weather:', err);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
      <h3>Weather in {weather.name}</h3>
      <p>🌡 Temp: {weather.main.temp}°C</p>
      <p>☁ Condition: {weather.weather[0].description}</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
