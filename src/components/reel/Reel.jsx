import React from "react";
import "./Reel.css";
import reel from "../../assets/reel.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={reel} onDragStart={handleDragStart} role="presentation" alt=''/>,
  <img src={reel} onDragStart={handleDragStart} role="presentation" alt=''/>,
  <img src={reel} onDragStart={handleDragStart} role="presentation" alt=''/>,
];

const Reel = () => {
  return (
    <section className="reel-content container" id="associate">
      <h2 className="reel-title">Nuestros Asociados</h2>
      {/* <img src={reel} width={300} height={300} alt=''>
        </img> */}
      <AliceCarousel mouseTracking items={items} autoHeight="true" autoWidth="true" disableButtonsControls="true"/>
    </section>
  );
};

export default Reel;
