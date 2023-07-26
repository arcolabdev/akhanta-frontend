import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
import "./AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="container">
      <Link to="/">
        <span>
          <TiArrowLeft className="icon" size="65px" color="#421400" />
        </span>
      </Link>
      <div className="admin-container">
        <h1>Panel Administrador</h1>
        <Link to="/admin/asociados">
          <button className="admin-btn">Asociados</button>
        </Link>
        <Link to="/admin/articulos">
          <button className="admin-btn">Articulos</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
