import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = "573142716508"; // Número de teléfono al que se enviará el mensaje
    const whatsappMessage = `Hola, soy ${name} y quiero enviar el siguiente mensaje: ${message}`;
    const fullUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-content container">
        <h1 className="footer-title">Contáctanos</h1>
        <div className="footer-box">
          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="footer-form-div">
              <input
                type="text"
                name="name"
                className="footer-form-input"
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="footer-form-div contact-form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Dejanos tu mensaje..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="contact-button">
              Enviar mensaje
            </button>
          </form>
          <ul className="footer-nav-media">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
