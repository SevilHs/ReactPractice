import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"movies"}>Movies</NavLink>
      <NavLink to={"add-edit"}>Add Movie</NavLink>
      <NavLink to={"favourites"}>Favourites</NavLink>
    </nav>
  );
};

export default Header;
