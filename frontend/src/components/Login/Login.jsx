import React from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authentication/authenticationSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.auth.status;
  });
  async function handleSubmit(event) {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/login", {
        email,
        password,
      })
      .then((response) => {
        dispatch(login(email));
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return (
    <>
      {status === true && <Navigate to="/" replace={true} />}
      <div className="login">
        <div className="login_container">
          <Link to="/">
            <img className="login_logo" src={logo} alt="logo" />{" "}
          </Link>
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="login_form">
            <label className="login_label">Enter email</label>
            <input
              onChange={handleChange}
              value={email}
              name="email"
              placeholder="abc@gmail.com"
              type="text"
              className="login_input"
            />
            <label className="login_label">Enter password</label>
            <input
              onChange={handleChange}
              value={password}
              name="password"
              placeholder="*********"
              type="password"
              className="login_input"
            />
            <button type="submit" className="login_button">
              Login
            </button>
          </form>
          <hr className="horizontal_line" />
          <Link to="/signup">
            <button className="register_button">create your account</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
