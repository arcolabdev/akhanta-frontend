import React from "react";
import "./AdminPanel.css";
import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
import AssociateForm from "./forms/AssociateForm";

function AdminPanel() {
 
  return (
    <div className="container justify-content-center form-container">
      <Link to="/">
        <span>
          <TiArrowLeft className="icon" size="65px" color="#C5D6E6" />
        </span>
      </Link>
      <AssociateForm />
    </div>
  );
}

export default AdminPanel;
