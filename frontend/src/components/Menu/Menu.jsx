import React from "react";
import "./Menu.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function Menu() {
  return (
    <div className="menu">
      <div className="menu_container">
        <div className="menu_header">
          <Link to="/">
            <img className="menu_logo" src={logo} alt="logo" />
          </Link>
          <Link to="/">
            <CloseIcon className="menu_close" />
          </Link>
        </div>
        <div className="row">
          <div className="col">
            <h4>Trending</h4>
            <ul>
              <li>
                <Link to="/movies" className="link">
                  <p>Movie</p>
                </Link>
              </li>
              <li>
                <Link to="/people" className="link">
                  <p>People</p>
                </Link>
              </li>
              <li>
                <Link to="/tv" className="link">
                  <p>TV</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>People</h4>
            <ul>
              <li>
                <p>Details</p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>TV Series List</h4>
            <ul>
              <li>
                <Link to="/airingtoday" className="link">
                  <p>Airing Today</p>
                </Link>
              </li>
              <li>
                <Link to="/ontheair" className="link">
                  <p>On the Air</p>
                </Link>
              </li>
              <li>
                <Link to="/popular" className="link">
                  <p>Popular</p>
                </Link>
              </li>
              <li>
                <Link to="/toprated" className="link">
                  <p>Top Rated</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
