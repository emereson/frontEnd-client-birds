import React from "react";
import "./pagesStyle/Footer.css";

const Footer = () => {
  return (
    <div className="Footer__container">
      <ul className="Footer__ul">
        <li>
          <p>©️ Copyright 2023 - 2024</p>
        </li>
        <li>
          <p> Todos los Derechos Reservados Administrador:</p>
          <a
            href="https://infotecgo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            INFOTECGO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
