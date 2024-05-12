import React from "react";
import "./People.css";
import { useState } from "react";
import FetchTvURL from "../../FetchTvURL/FetchTvURL";
function People() {
  const [page, setPage] = useState(1);
  function pageHandler(num) {
    setPage(num);
  }
  const url =
    "https://api.themoviedb.org/3/trending/person/day?language=en-US&page=";
    const image_path="profile_path"
  return <FetchTvURL image_path={image_path} page={page} url={url} parentFunc={pageHandler} />;
}

export default People;
