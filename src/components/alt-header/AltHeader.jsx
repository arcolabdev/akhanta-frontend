import React, { useState, useEffect } from "react";
import "./AltHeader.css";
import logo from "../../assets/full-logo-opt.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AltHeader = () => {
  const navigate = useNavigate();

  return (
    <section className="alt-header-container">
      <header className="header-content">
        <FontAwesomeIcon
          className="header-back"
          icon={faArrowLeft}
          onClick={() => navigate("/")}
        />
        <img className="header-logo alt-header-logo" src={logo} alt="logo" />
        <FontAwesomeIcon
          className="header-back header-filler"
          icon={faArrowLeft}
        />
      </header>
    </section>
  );
};

export default AltHeader;
