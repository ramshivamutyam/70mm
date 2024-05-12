import React from "react";
import "./Home.css";
import homeLogo from "./homeLogo.jpg";
import FetchURL from "../FetchURL/FetchURl";
import { useState } from "react";
function Home() {
  const [page, setPage] = useState(1);
  function pageHandler(num) {
    setPage(num);
  }
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=";
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" alt="img" src={homeLogo} />
        <FetchURL page={page} parentFunc={pageHandler} url={url} />
      </div>
    </div>
  );
}

export default Home;
