import React from "react";
import { NavLink } from "react-router-dom";
// import "./index.scss"

const Header = () => {
  return (
    <div id="header" className="py-7 bg-purple-100 text-lg">
      <div className="mx-auto max-w-7xl">
        <div className="header">
            <nav className="flex justify-between items-center">
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
