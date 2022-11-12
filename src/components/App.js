import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import { useState } from "react";

/* App takes 2 props from index.js location and predictions,LocationDetails is taking 2 props city and country and ForecastSummaries takes another prop forecasts */
function App({ location, predictions }) {
  const [selectedDate, setSelectedDate] = useState(predictions[0].date);
  

  /* {city,country}= location
  location is the prop name that App is taking from index.js and it does contain city and country,
  predictions which is the prop that App is taking from index.js is = forecast.forecasts which is the array containing the forecats.
  */
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={predictions} />
      <ForecastDetails forecast={predictions[0]} />
    </div>
  );
}
App.propTypes = {
  predictions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
      humidity: PropTypes.number,
      wind: PropTypes.shape({
        direction: PropTypes.string,
        speed: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
