import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from "axios";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useHistory es un hook que permite manipular el historial del navegador, se puede cambiar la URL de la página actual sin necesidad de recargarla
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://example.com/login", { email, password })
      .then((response) => {
        if (response.data.isAdmin) {
          // si el usuario es un administrador, redirecciona a la página de administración
          history.push("/admin");
        } else {
          // si el usuario no es un administrador, muestra un mensaje de error
          alert("No tienes permiso para acceder a la página de administración");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
      <section className="login-context container">
        <Link to="/">
          <span><TiArrowLeft className="icon"
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
            size="65px"
            color="#C5D6E6" />
          </span>
        </Link>
        <section className="header">
          <img src={logo} alt="logo" />
        </section>
        <section className="login">
          <div className="login-container">
            <div className="login-title">
              <h1>Welcome</h1>
              <h2>Please log in</h2>
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
                <input type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Log In</button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
