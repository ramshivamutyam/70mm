import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import QueueIcon from "@mui/icons-material/Queue";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication/authenticationSlice";
import { clearWatchList } from "../../features/watchlist/watchlistSlice";
function Header() {
  const watchlist_count = useSelector((state) => {
    return state.watchlist.watchlists.length;
  });
  const userData = useSelector((state) => {
    return state.auth.userData;
  });
  const authStatus = useSelector((state) => {
    return state.auth.status;
  });
  const dispatch = useDispatch();
  function handleLogout(event) {
    event.preventDefault();
    dispatch(clearWatchList());
    dispatch(logout());
    
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
      <Link to="/menu" className="menu_link">
        <div className="header_menu">
          <div>
            <MenuIcon />
          </div>
          <div>Menu</div>
        </div>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="watchlist" className="link">
          <div className="header_option">
            <div className="header_optionLineOne">
              <QueueIcon />
              <span>
                Watchlist {watchlist_count !== 0 ? watchlist_count : null}
              </span>
            </div>
          </div>
        </Link>

        <div className="header_option">
          {authStatus ? (
            <div className="header_optionLineOne">
              <span style={{ fontWeight: 800 }}>
                {userData ? userData : "Login"}
              </span>
              <button className="header_logout_button" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login_link">
              <span
                className="header_optionLineOne"
                style={{ fontWeight: 800 }}
              >
                Login
              </span>
            </Link>
          )}
        </div>

        {/* <Link to="/signup" className="signup_link">
          <div className="header_option">
            <span className="header_optionLineOne" style={{ fontWeight: 800 }}>
              {userData?userData:"Sign up"}
            </span>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
