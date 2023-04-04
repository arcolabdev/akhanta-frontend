import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header-content container">
      <nav className="header-nav">
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={
                activeNav === "#about" ? "nav__link active-link" : "nav__link"
              }
            >
              Quienes somos
            </a>
          </li>
          <li>
            <a
              href="#associate"
              onClick={() => setActiveNav("#associate")}
              className={
                activeNav === "#associate"
                  ? "nav__link active-link"
                  : "nav__link"
              }
            >
              Asociados{" "}
            </a>
          </li>
        </ul>
      </nav>
      <img className="header-logo" src={logo} width={70} height={40} alt="" />
      <nav className="header-nav">
        <ul>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={
                activeNav === "#contact" ? "nav__link active-link" : "nav__link"
              }
            >
              Contacto
            </a>
          </li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
