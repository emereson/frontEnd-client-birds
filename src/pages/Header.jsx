import React from "react";
import { Link } from "react-router-dom";
import "./pagesStyle/Header.css";

const Header = () => {
  return (
    <div className="Header_container">
      <img src="/logogallo.png" alt="logo de SRGO" />
      <div className="Header_linksContainer">
        <Link to="/">BUSCAR AVE</Link>
      </div>
    </div>
  );
};

export default Header;
