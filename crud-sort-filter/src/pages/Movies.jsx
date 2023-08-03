import React, { useContext, useState } from "react";
import Movie from "../components/Movie";
import SearchSort from "../components/SearchSort";
import { v4 as uuid } from "uuid";
import { MoviesContext } from "../context/MoviesContext";

const Movies = () => {
  const [searchValue, setSearchValue] = useState("");
  const { movies, setMovies, defaultData, favourites, setFavourites } =useContext(MoviesContext);
  return (
    <>
      <h1>Movies</h1>
      <SearchSort
        setSearchValue={setSearchValue}
        movies={movies}
        setMovies={setMovies}
        defaultData={defaultData}
      />
      <div className="movies-cards">
        {movies
          .filter((item) =>
            item.Title.toLocaleLowerCase().includes(
              searchValue.toLocaleLowerCase()
            )
          )
          .map((movie) => (
            <Movie
              key={uuid()}
              movie={movie}
              movies={movies}
              setMovies={setMovies}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ))}
      </div>
    </>
  );
};

export default Movies;
