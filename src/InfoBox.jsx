import React from 'react';

export default function InfoBox({ weatherData, error }) {
  if (error) {
    return <div className="info-box"><p>{error}</p></div>;
  }

  if (!weatherData) {
    return <div className="info-box"><p>No data available</p></div>;
  }

  return (
    <div className="info-box">
      <h3>Weather Information</h3>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {Math.round(weatherData.temp - 273.15)}°C</p>
      <p>Min Temperature: {Math.round(weatherData.tempMin - 273.15)}°C</p>
      <p>Max Temperature: {Math.round(weatherData.tempMax - 273.15)}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Feels Like: {Math.round(weatherData.feelsLike - 273.15)}°C</p>
      <p>Weather: {weatherData.weather}</p>
    </div>
  );
}
