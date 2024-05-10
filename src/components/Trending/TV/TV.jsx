import React, { useState } from "react";
import FetchURL from "../../FetchURL/FetchURl";
import "./TV.css";
function TV() {
  const [page, setPage] = useState(1);
  const url =
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US&page=";
  function pageHandler(num) {
    setPage(num);
  }
  return <FetchURL page={page} parentFunc={pageHandler} url={url} />;
}

export default TV;
