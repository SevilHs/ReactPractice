import {Button,ButtonGroup,Card,CardBody,CardFooter,Divider,Heading,Image,Stack,Text} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { deleteMovie } from "../services/movie.service";

const Movie = ({ movie, movies, setMovies, favourites, setFavourites }) => {
  const handleDelete = (id) => {
    deleteMovie(id);
    setMovies(movies.filter((item) => item.id != id));
  };
  const handleAddFav = (favMovie) => {
    const checkFav=favourites.find(item=>item.id==favMovie.id)
    if (!checkFav) {
      setFavourites([...favourites, favMovie]);
    }
  };
  return (
    <div>
      <Card maxW="350" h={"600"}>
        <CardBody>
          <Image
            src={movie?.Images[0]}
            alt={movie?.Title}
            borderRadius="lg"
            h={"200"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {movie?.Title}, {movie?.Released}
            </Heading>
            <Text>{movie?.Plot} </Text>
            <Text>Language:{movie?.Language}</Text>
            <Text>Imdb Rating:{movie?.imdbRating}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              isDisabled={
                favourites.find(item=>item.id==movie.id) ? true : false
              }
              onClick={() => handleAddFav(movie)}
            > 
              {favourites.find(item=>item.id==movie.id) ? "Added" : "Add Favourites"}
            </Button>
            <Link to={`/add-edit/${movie.id}`}>Edit</Link>
            <Button
              variant="ghost"
              color="#fff"
              bgColor="#E53E3E"
              onClick={() => handleDelete(movie.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Movie;
