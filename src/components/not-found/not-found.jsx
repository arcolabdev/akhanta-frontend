import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ups! 404.</h1>
      <p>Parece que la página que esta buscando no existe</p>
      <p>
        Por favor, haga click{" "}
        <Link style={{ color: "blue", textDecoration: "underline" }} to="/">
          AQUI
        </Link>{" "}
        para volver al inicio.
      </p>
    </div>
  );
};

export default NotFound;
