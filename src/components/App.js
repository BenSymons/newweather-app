import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../request/getForecast";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecatSelect = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []); /* here the use effect is invoking get forecast straightaway when the app is mounted infact the [] is empty and calling all the 3 setters inside that will provide the data from the API */
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecatSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}
export default App;
