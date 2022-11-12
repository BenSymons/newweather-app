import React, { useState } from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

/* App takes 2 props from index.js location and predictions,LocationDetails is taking 2 props city and country and ForecastSummaries takes another prop forecasts */
function App({ location, predictions }) {
  const [selectedDate, setSelectedDate] = useState(predictions[0].date);
  const selectedForecast = predictions.find(
    (prediction) => prediction.date === selectedDate
  );
  /* {city,country}= location
  location is the prop name that App is taking from index.js and it does contain city and country,
  predictions which is the prop that App is taking from index.js is = forecast.forecasts which is the array containing the forecats.
  */
  const handleForecatSelect = (date) => {
    setSelectedDate(date);
  }; /* this event handler is pretty simple -
   the function gets passed a date, and we use the setSelectedDate() method 
  from our selectedDate hook to set that date on our state object. */
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={
          predictions
        } /* We are passing 2 props to Forecast Summaries (forecasts and onForecastSelect) */
        onForecastSelect={
          handleForecatSelect
        } /* This is an event handler and we need to pass it down to Forecast summaries and then to Forecastsummary */
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
    /* Now the <ForecastDetails /> component can render whichever forecast 
    matches our selected date.
    If that date changes, then the forecast rendered in <ForecastDetails /> 
    will also change, but you might see an error in the command line 
    (where you run npm start) or in the browser: */
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
