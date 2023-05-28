import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const ListContainer = ({ movieList, handleOnDelete }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movieList);
  }, [movieList]);

  const handleOnFilter = (movieType) => {
    if (movieType === "all") {
      return setDisplay(movieList);
    }

    const filteredArg = movieList.filter(
      (item) => item.MovieType === movieType
    );
    setDisplay(filteredArg);
  };

  return (
    <div className="list-container">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleOnFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleOnFilter("excellent")}
        >
          Excellent
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleOnFilter("not-bad")}
        >
          Not Bad
        </button>
      </div>
      <div className="mt-3">{display.length} movies </div>
      <hr />
      <div className="d-flex flex-wrap justify-content-around gap-2">
        {display?.map((item) => (
          <CustomCard {...item} handleOnDelete={handleOnDelete} />
        ))}
      </div>
    </div>
  );
};
