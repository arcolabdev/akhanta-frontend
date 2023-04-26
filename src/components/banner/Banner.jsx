import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-content">
      <div className="banner">
        <h1>
          <span className="banner-span">
            “La espiritualidad no es religión.
          </span>
          <br /> Solo se trata del entendimiento de lo que somos, el mundo donde
          nos encontramos y como actuamos en consecuencia”
        </h1>
        <p className="banner-title-author">-Sifu</p>
      </div>
    </section>
  );
};

export default Banner;
