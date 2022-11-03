import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
/* LocationDetails takes 2 props so App wich is the parent needs to give two props that gets contained in the location prop that App takes from index.js where all the data are contained */
function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
}
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
