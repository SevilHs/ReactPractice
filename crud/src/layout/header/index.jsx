import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"customers-list"}>Customers List</NavLink>
                <NavLink to={"add-customer"}>Add Customer</NavLink>
                <NavLink to={"favourites"}>Favourites</NavLink>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
