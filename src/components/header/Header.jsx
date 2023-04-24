import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (
      activeNav === "#associate" ||
      activeNav === "#about" ||
      activeNav === "#contact"
    ) {
      setOpenNav(false);
    }
  }, [activeNav]);

  return (
    <header className="header-content container">
      <nav className={openNav ? "noshow" : "header-nav"}>
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
                  : "nav__link "
              }
            >
              Asociados
            </a>
          </li>
        </ul>
      </nav>
      <img className="header-logo" src={logo} width={150} height={85} alt="" />
      <nav className={openNav ? "noshow" : "header-nav"}>
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
          <li>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          </li>
        </ul>
      </nav>

      <section className={openNav ? "header-nav nav nav-mobile" : "noshow"}>
        <nav className={openNav ? "header-nav nav nav-mobile" : "nav"}>
          <FontAwesomeIcon
            className={openNav ? "close-menu" : "noshow"}
            icon={faClose}
            onClick={() => setOpenNav(false)}
          />
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
                    : "nav__link "
                }
              >
                Asociados
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                Contacto
              </a>
            </li>
            <li>
              <Link to="/login">
                <button className="login-button">Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <FontAwesomeIcon
        className={openNav ? "noshow" : "hamburger"}
        icon={faBars}
        onClick={() => setOpenNav(true)}
      />
    </header>
  );
};

export default Header;
