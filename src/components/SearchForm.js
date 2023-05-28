import React, { useState } from "react";
import { CustomCard } from "./CustomCard";
import { fetchData } from "../helper/axiosHelper";

export const SearchForm = ({ addToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState("");
  const [error, setError] = useState(false);

  //1. get the data from the form
  const handleOnChange = (e) => {
    setForm(e.target.value);
    console.log(e.target.value);
  };

  //2.when submitting form use the form data to call api
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    //calling api
    const data = await fetchData(form);
    if (data?.imdbID) {
      setMovie(data);
      setError(false);
    } else {
      setMovie({});
      setError(true);
    }
  };
  const handleOnAddMovieClicked = (MovieType) => {
    addToList({ ...movie, MovieType });
    // console.log({ ...movie, MovieType });

    setMovie({});
  };

  const handleOnDelete = () => {
    setMovie({});
  };

  return (
    <div>
      <div className="search-form">
        <form action="">
          <div className="row g-2 ">
            <div className="col-md-9   ">
              <input
                type="text"
                className="form-control"
                placeholder="Search movie here"
                aria-label="First name"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="col-md-3  d-grid">
              <button className="btn btn-warning" onClick={handleOnSubmit}>
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-4">
          {movie.imdbID && (
            <CustomCard
              {...movie}
              handleOnAddMovieClicked={handleOnAddMovieClicked}
              handleOnDelete={handleOnDelete}
            />
          )}
          {error && (
            <div className="alert alert-danger">Sorry, No movie found </div>
          )}
        </div>
      </div>
    </div>
  );
};
