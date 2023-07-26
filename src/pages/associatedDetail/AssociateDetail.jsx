import React, { useContext } from "react";
import "./AssociateDetail.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdArrowBackIosNew, MdWhatsapp } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { useParams } from "react-router-dom";

const AssociatedDetail = () => {
  const { data } = useContext(Context);
  const { id } = useParams();
  const associated = data.find((item) => item.id === parseInt(id));

  if (!associated) {
    return null;
  }

  const { profile, banner, description, name, links } = associated;

  return (
    <div>
      <img src={banner} className="banner-associate" alt="banner" />
      <button className="back-to-main-associates">
        <Link to="/">
          <MdArrowBackIosNew size={25} color="#9e75e5" />
        </Link>
      </button>
      <section className="associates-about-section">
        <img src={profile} alt="logo" className="associate-img" />
        <article className="associates-info">
          <h1>{name}</h1>
          <p>{description}</p>
        </article>
      </section>
      <div className="associates-section-footer">
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
      </div>
    </div>
  );
};

export default AssociatedDetail;
