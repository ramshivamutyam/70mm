import React from "react";
import { useState, useEffect } from "react";
import "./FetchTvURL.css";
import PersonCard from "../PersonCard/PersonCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import conf from "../../conf/conf.js";
function FetchTvURL(props) {
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
    <div className="person">
      <div className="person_container">
        {data.map((item) => {
          return (
            <PersonCard
              id={item.id}
              key={item.id}
              name={item.name}
              alt={item.name}
              popularity={item.popularity}
              image={"https://image.tmdb.org/t/p/w185" + item[props.image_path]}
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

export default FetchTvURL;
