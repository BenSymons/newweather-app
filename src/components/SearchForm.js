import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  // eslint-disable-next-line no-console
  const handleInputChange = (event) => setSearchText(event.target.value);
  /* At the moment, when text is entered into the text box, 
  we have no way of referencing the value in the text box. 
  To be able to use the value, we first need to capture it in the component's state. */
  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        className="search-form__input"
      />
      <button
        type="submit"
        onClick={onSubmit}
        className="search-form__button"
        data-testid="search-form__button"
      >
        Search
      </button>
    </div>
  );
}
export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
