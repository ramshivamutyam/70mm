import React from "react";
import { useState } from "react";
import FetchTvURL from "../../FetchTvURL/FetchTvURL";
function TopRated() {
  const [page, setPage] = useState(1);
  function pageHandler(num) {
    setPage(num);
  }
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=";
  const image_path = "poster_path";
  return (
    <FetchTvURL
      image_path={image_path}
      page={page}
      url={url}
      parentFunc={pageHandler}
    />
  );
}

export default TopRated;
