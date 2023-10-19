import React from "react";
import "./Phrase.css";
import frame from "../../assets/frame-phrase.png";

const Phrase = () => {
  return (
    <section className="phrase-section">
      <div className="phrase-container">
        <img src={frame} alt="marco de la frase" />
        <h3>
         La autoexploración y las acciones transformadoras abren la
          oportunidad de una vida de satisfaccion y alegría
        </h3>
      </div>
    </section>
  );
};

export default Phrase;
