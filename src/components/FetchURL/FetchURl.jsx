import React from "react";
import "./FetchURL.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import conf from "../../conf/conf.js";
function FetchURL(props) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const url = props.url + props.page;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: conf.ReadAccessToken,
    },
  };
  const fetchInfo = () => {
    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    fetchInfo();
  }, [count]);
  return (
    <div className="home_container">
      <div className="home_row">
        {data.map((item) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              name={item.title}
              alt={item.title}
              rating={parseInt(item.vote_average)}
              image={"https://image.tmdb.org/t/p/w185" + item.poster_path}
            />
          );
        })}
      </div>
      <div className="page_slide">
        <div
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
            props.parentFunc(props.page - 1);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowCircleLeftIcon className="arrow_icon" />
        </div>
        <strong>Page {props.page}</strong>
        <div
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
            props.parentFunc(props.page + 1);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowCircleRightIcon className="arrow_icon" />
        </div>
      </div>
    </div>
  );
}

export default FetchURL;
