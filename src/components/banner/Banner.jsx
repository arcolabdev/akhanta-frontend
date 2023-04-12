import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-content container">
      <div className="banner-flex">
        <div className="banner-title">
          <div className="banner-title-quotes">"</div>
          <div className="banner-title-text">
            <span>Para la mente que está quieta,</span>
            <br />
            <span className="banner-title-phrase-2">
              todo el universo se rinde
            </span>
            <span className="banner-title-quotes">"</span>
          </div>
        </div>
        <p className="banner-author">-Lao Tse</p>
      </div>
    </section>
  );
};

export default Banner;
