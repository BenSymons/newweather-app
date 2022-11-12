import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
    /* The function we want to invoke should invoke the handler function we wrote earlier in our <App /> component, 
    and we want it to invoke that function with the relevant date passed as an argument.
    Now each rendered <ForecastSummary /> has access to the handleForecastSelect() method 
    from <App />, regardless of it being called onSelect within the scope of <ForecastSummary />. 
    This means that <ForecastSummary /> has the ability to set state in the <App /> component.
    We can invoke this method as a callback function when the onClick event is called, and pass date to it as a param: 
    Usually for example onClick = {handleClick} but handleClick = ()=> {setcount(prev)=> prev+1} so handleClick is callbackfunction and is set to be date */
  );
}

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};
