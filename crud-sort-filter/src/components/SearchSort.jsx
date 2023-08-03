import { Input, Select } from "@chakra-ui/react";
import React from "react";

const SearchSort = ({ setSearchValue, defaultData, movies, setMovies }) => {
  const handleSort = (value) => {
    if (value == "default") {
      setMovies(defaultData);
    } else if (value == "high") {
      setMovies([...movies.sort((a, b) => a.imdbRating - b.imdbRating)]);
    } else if (value == "low") {
      setMovies([...movies.sort((a, b) => b.imdbRating - a.imdbRating)]);
    }
  }
  return (
    <div className="search-sort">
      <Input
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search to Movie Name..."
        _placeholder={{ color: "rgb(195, 184, 239)" }}
      />
      <Select 
      w={200}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option  hidden>Sort By Imdb</option>
        <option value="default">Default</option>
        <option value="high">Low to High</option>
        <option value="low">High to Low</option>
      </Select>
    </div>
  );
};

export default SearchSort;
