import { createContext, useEffect, useState } from "react";
import { getData } from "../services/movie.service";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const getMovies = async () => {
    setMovies(await getData());
    setDefaultData(await getData());
  };
  useEffect(() => {
    getMovies();
  }, []);
 const providerValue = {
    movies,
    setMovies,
    defaultData,
    setDefaultData,
    favourites,
    setFavourites
  };

  return(
    <MoviesContext.Provider value={providerValue}>
        {children}
    </MoviesContext.Provider>
  )
};

export default MoviesProvider