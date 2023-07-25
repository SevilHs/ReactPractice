import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FavouritesContext } from "../../context/FavouritesContext";

const Favourites = () => {
  const { favourites, setFavourites } = useContext(FavouritesContext);
  const handleDeleteFav=(id)=>{
    setFavourites(favourites.filter(item=>item.id!=id))
  }
  return (
    <div>
      <Helmet>
        <title>Favourites</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favourites.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.companyName}</td>
                <td>{item.address.city}</td>
                <td>
                  <button onClick={()=>handleDeleteFav(item.id)}>Delete</button>
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
