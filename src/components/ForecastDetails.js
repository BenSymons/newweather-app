import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details_date">Date:{formattedDate}</div>
      <div className="forecast-details_humidity">{humidity}</div>
      <div className="forecast-details_temperaturemax">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-details_temperaturemin">
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details_windspeed">{wind.speed}</div>
      <div className="forecast-details_winddirection">{wind.direction}</div>
    </div>
  );
}
export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};
