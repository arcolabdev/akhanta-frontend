import React, { useState } from "react";
import "./Login.css";
import { TiArrowLeft } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useNavigate es un hook que permite manipular el historial del navegador, se puede cambiar la URL de la página actual sin necesidad de recargarla
  const navigate = useNavigate();

  const baseUrl = "https://api.ar-colab.com:8443/api/v1/auth/login";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        baseUrl,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.role === "ADMIN") {
          navigate("/admin");
          localStorage.setItem("token", response.data.token);
        } else {
          alert("No tienes permiso para acceder a la página de administración");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Usuario o contraseña incorrectos");
      });
  };

  return (
    <div className="login-container">
      <Link to="/">
        <span>
          <TiArrowLeft
            className="icon"
            style={{
              position: "absolute",
              top: "40px",
              left: "40px",
            }}
            size="65px"
            color="#a889de"
          />
        </span>
      </Link>
      <section>
        <div className="login-title">
          <h1>Iniciar Sesión</h1>
        </div>
        <div className="login-form">
          <form action="login" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="login-btn">Log In</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
