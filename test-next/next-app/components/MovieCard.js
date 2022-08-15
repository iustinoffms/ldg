import { Box } from "@mui/material";
import data from "../data.json";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const dataWithIDs = data.map((obj) => !obj.id && { ...obj, id: uuidv4() });

function MovieList() {
  const [allMoviesArray, setAllMoviesArray] = useState(dataWithIDs);
  return (
    <Box>
      {allMoviesArray.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </Box>
  );
}

export default MovieList;


function MovieCard({ movie }) {
    return <h1>{movie.title}</h1>;
  }
  
  export default MovieCard;
  