import React, { useState } from 'react';  // Ensure useState is imported from React
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ onWeatherData, onError }) {
  const [city, setCity] = useState("");  // Initialize state
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c525982007d7e788fc2662f0d4a20a14";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonResponse = await response.json();
      let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,  // Corrected key name
        weather: jsonResponse.weather[0].description,
      };
      onWeatherData(result);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      onError('Failed to fetch weather data. Please try again.');
    }
  }

  const handleChange = (evt) => {
    setCity(evt.target.value);  // Update state on input change
  };

  const handleSubmit = (evt) => {  // Correct function name
    evt.preventDefault();
    getWeatherInfo();
    setCity("");  // Reset the city state
  };

  return (
    <div className="search-box">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>  {/* Correct function reference */}
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
