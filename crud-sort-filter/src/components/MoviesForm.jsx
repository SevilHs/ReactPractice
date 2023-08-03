import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validate } from "../validation";
import { Button, FormLabel, Textarea } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { addMovie, updateMovie } from "../services/movie.service";

const MoviesForm = ({ id, selectedMovie, movies, setMovies }) => {
  const navigate = useNavigate();
  const handleAdd = (values) => {
    const obj = {
      id: uuid(),
      ...values,
    };
    addMovie(obj);
    setMovies([...movies, obj]);
  };
  const handleUpdate = (id, values) => {
    updateMovie(id, values);
    const Images = selectedMovie.Images;
    const index = movies.findIndex((item) => item.id == id);
    const moviesCopy = [...movies];
    moviesCopy.splice(index, 1, { ...values, id, Images });
    setMovies(moviesCopy);
  };
  return (
    <div className="movies-form">
      <h1>{id ? "Edit Movie" : "Add Movie"}</h1>
      <Formik
        initialValues={
          id
            ? {
                Title: selectedMovie.Title,
                Released: selectedMovie.Released,
                Plot: selectedMovie.Plot,
                Language: selectedMovie.Language,
                imdbRating: selectedMovie.imdbRating,
              }
            : {
                Title: "",
                Released: "",
                Plot: "",
                Language: "",
                imdbRating: "",
                Images: "",
              }
        }
        validationSchema={validate}
        onSubmit={(values) => {
          id ? handleUpdate(id, values) : handleAdd(values);
          navigate("/movies");
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormLabel>Title</FormLabel>
            <Field type="text" name="Title" />
            <ErrorMessage component="div" name="Title" />
            <FormLabel>Released</FormLabel>
            <Field type="text" name="Released" />
            <ErrorMessage component="div" name="Released" />
            <FormLabel>Plot</FormLabel>
            <Textarea
              name="Plot"
              cols="30"
              onChange={handleChange}
              value={values.Plot}
            />
            <ErrorMessage component="div" name="Plot" />
            <FormLabel>Language</FormLabel>
            <Field type="text" name="Language" />
            <ErrorMessage component="div" name="Language" />
            <FormLabel>ImdbRating</FormLabel>
            <Field type="text" name="imdbRating" />
            <ErrorMessage component="div" name="imdbRating" />
            <FormLabel>Image</FormLabel>
            <Field type="file" name="Images" />
            <Button
              type="submit"
              mx="auto"
              my={5}
              display="inherit"
              colorScheme="linkedin"
            >
              {id ? "Edit" : "Add"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MoviesForm;
