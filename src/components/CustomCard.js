import React from "react";

export const CustomCard = ({
  Poster,
  Title,
  Year,
  imdbRating,
  handleOnAddMovieClicked,
  handleOnDelete,
  imdbID,
}) => {
  return (
    <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <div>Rating: {imdbRating} </div>
        <div>Released: {Year} </div>
        {handleOnAddMovieClicked && (
          <div className="d-flex justify-content-between py-3">
            <button
              onClick={() => handleOnAddMovieClicked("excellent")}
              className="btn btn-success"
            >
              Excellent
            </button>
            <button
              onClick={() => handleOnAddMovieClicked("not-bad")}
              className="btn btn-warning"
            >
              Not Bad
            </button>
          </div>
        )}
        {handleOnDelete && (
          <div className="d-grid">
            <button
              className=" btn btn-danger"
              onClick={() => handleOnDelete(imdbID)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
