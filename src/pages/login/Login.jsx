import React from "react";
import logo from "../../assets/logo.png";
import "./Login.css";
import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";



const Login = () => {
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
            color="#C5D6E6"/>
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
              <form action="login">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <input type="password" placeholder="Password" />
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
