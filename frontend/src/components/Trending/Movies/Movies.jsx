import React from "react";
import "./Movies.css";
import { useState } from "react";
import FetchURL from "../../FetchURL/FetchURl";
function Movies() {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=";
  const [page, setPage] = useState(1);
  function pageHandler(num) {
    setPage(num);
  }
  return <FetchURL page={page} parentFunc={pageHandler} url={url} />;
}

export default Movies;
