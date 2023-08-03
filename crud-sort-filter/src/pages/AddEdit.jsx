import React, { useContext } from "react";
import AddEditForm from "../components/MoviesForm";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

const AddEdit = () => {
  const { id } = useParams();
  const { movies, setMovies } = useContext(MoviesContext);
  const selectedMovie = movies.find((item) => item.id == id);
  return (
    <div>
      <AddEditForm
        id={id}
        selectedMovie={selectedMovie}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
};

export default AddEdit;
