import React from "react";

const SearchBar = ({ handleChange, search }) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="search for a movie"
        className="searchbox"
        onChange={handleChange}
        onKeyPress={search}
      />
    </section>
  );
};

export default SearchBar;
