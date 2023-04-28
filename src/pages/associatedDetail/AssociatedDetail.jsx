import React, { useContext, useEffect, useState } from "react";
import "./AssociatedDetail.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdArrowBackIosNew, MdWhatsapp } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { useParams } from "react-router-dom";

const AssociatedDetail = () => {
  useEffect(() => {}, []);

  const { data } = useContext(Context);
  const { id } = useParams();
  const associated = data.find((item) => item.id === parseInt(id));

  if (!associated) {
    return null;
  }

  const { profile, banner, description, name, links } = associated;

  return (
    <div>
      <div
        className="background-banner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <button className="back-to-main-associates">
        <Link to="/">
          <MdArrowBackIosNew size={35} color="#9e75e5" />
          <span style={{ color: "#9e75e5" }}>Volver a Inicio</span>
        </Link>
      </button>
      <section className="about-section">
        <article className="info-contain">
          <h1>{name}</h1>
          <p>{description}</p>
        </article>
        <aside className="image-contain">
          <img src={profile} alt="imagen-asociado" className="associate-img" />
        </aside>
      </section>
      <footer className="section-footer">
        {links &&
          links.map((link) => {
            switch (link.tag) {
              case "INSTAGRAM":
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={35} color="#C3BEAA" />
                  </a>
                );
              case "FACEBOOK":
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF size={35} color="#C3BEAA" />
                  </a>
                );
              case "WHATSAPP":
                return (
                  <a
                    key={link.id}
                    href={"https://wa.me/" + link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MdWhatsapp size={35} color="#C3BEAA" />
                  </a>
                );
              case "TELEGRAM":
                return (
                  <a
                    key={link.id}
                    href={"https://t.me/" + link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTelegram size={35} color="#C3BEAA" />
                  </a>
                );
              default:
                return null; // no renderizar nada si el tag no coincide
            }
          })}
      </footer>
    </div>
  );
};

export default AssociatedDetail;
