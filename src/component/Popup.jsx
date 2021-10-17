import React from "react";

const Popup = ({ selected, closePopUp }) => {
  console.log(selected);
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt={selected.Title} />
          <p>{selected.Plot}</p>
        </div>
        <button onClick={closePopUp} className="close">
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
