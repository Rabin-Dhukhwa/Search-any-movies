import { useState } from "react";
import "./App.css";
import { ListContainer } from "./components/ListContainer";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToList = (movie) => {
    // console.log(movie);
    const arg = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...arg, movie]);
  };
  console.log(movieList);

  const handleOnDelete = (id) => {
    const arg = movieList.filter((item) => item.imdbID !== id);
    setMovieList(arg);
  };

  return (
    <div className="wrapper bg-dark text-warning ">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5 fs-1">
            {/* TItle section  */}
            Search Any Movies
            <br />
            <hr />
          </div>
        </div>

        {/* form section */}
        <SearchForm addToList={addToList} />
        <h5 className="mt-3 d-flex justify-content-center">
          "Excellent"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OR
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Not Bad"
        </h5>

        {/* list section  */}
        <ListContainer movieList={movieList} handleOnDelete={handleOnDelete} />
      </div>
    </div>
  );
}

export default App;
