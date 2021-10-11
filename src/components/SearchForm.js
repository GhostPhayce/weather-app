import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchForm.css";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => setSearchText(event.target.value);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      return onSubmit();
    }
    return null;
  };

  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleEnter}
        value={searchText}
      />
      <button className="search-form__search" type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
