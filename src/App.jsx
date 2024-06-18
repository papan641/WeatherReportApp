import React, { useState } from 'react';
import SearchBox from './search_box/SearchBox';
import InfoBox from './InfoBox';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setError(null);  // Clear any previous errors
  };

  const handleError = (error) => {
    setWeatherData(null);  // Clear any previous weather data
    setError(error);
  };

  return (
    <div>
      <SearchBox onWeatherData={handleWeatherData} onError={handleError} />
      <InfoBox weatherData={weatherData} error={error} />
    </div>
  );
}

export default App;
