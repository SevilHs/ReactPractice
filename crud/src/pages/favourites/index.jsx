import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FavouritesContext } from "../../context/FavouritesContext";

const Favourites = () => {
  const { favourites, setFavourites } = useContext(FavouritesContext);
  const handleDeleteFav = (id) => {
    setFavourites(favourites.filter((item) => item.id != id));
  };
  return (
    <div>
      <Helmet>
        <title>Favourites</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <table className="w-1/2 mx-auto my-7">
        <thead>
          <tr>
            <th className="text-start">Id</th>
            <th className="text-start">Company Name</th>
            <th className="text-start">Contact Title</th>
            <th className="text-start">Address</th>
            <th className="text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {favourites.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.contactTitle}</td>
                <td>{item.address.city}</td>
                <td>
                  <button
                    className="bg-indigo-400 rounded p-2"
                    onClick={() => handleDeleteFav(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Favourites;
