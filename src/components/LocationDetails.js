import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
} /* I think the ? after error Message (efter the return) means return the error message if the error message exists */
LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
export default LocationDetails;
