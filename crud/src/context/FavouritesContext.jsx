import { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const providerValue = {
    favourites,
    setFavourites,
  };
  return (
    <FavouritesContext.Provider value={providerValue}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
