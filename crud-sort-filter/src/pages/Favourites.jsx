import React, { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import {Button,Table,TableCaption,TableContainer,Tbody,Td,Th,Thead,Tr} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const Favourites = () => {
  const { favourites, setFavourites } = useContext(MoviesContext);
  const handleRemove = (id) => {
    setFavourites(favourites.filter((item) => item.id != id));
  };
  const handleRemoveAll = () => {
    setFavourites([]);
  };
  return (
    <TableContainer minH={630}>
      <Table variant="simple" my={10}>
        <TableCaption placement="top" fontSize={"2em"}>
          FAVOURITES MOVIES
        </TableCaption>
        <Thead bg={"#ddd"}>
          <Tr>
            <Th>Movie Name, Year</Th>
            <Th>Director</Th>
            <Th>Genre</Th>
            <Th>Language</Th>
            <Th>Remove Movie</Th>
          </Tr>
        </Thead>
        <Tbody>
          {favourites.map((item) => {
            return (
              <Tr key={uuid()}>
                {console.log(item)}
                <Td>
                  {item.Title},{item.Released}
                </Td>
                <Td>{item.Director}</Td>
                <Td>{item.Genre}</Td>
                <Td>{item.Language}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Button
        display={"inherit"}
        mx={"auto"}
        colorScheme="red"
        onClick={() => handleRemoveAll()}
      >
        Remove All
      </Button>
    </TableContainer>
  );
};

export default Favourites;
