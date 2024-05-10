import React from "react";
import "./Footer.css";
import { useState } from "react";
const date = new Date().toLocaleString();
function Footer() {
  const [time, setTime] = useState(date);
  setInterval(() => {
    const updateTime = new Date().toLocaleString();
    setTime(updateTime);
  }, 1000);
  return (
    <div className="footer">
      <p>
        <strong>©️</strong> All rights are reserved{" "}
      </p>
      <p
        style={{
          marginBottom: "10px"
        }}
      >{`${time}`}</p>
    </div>
  );
}

export default Footer;
