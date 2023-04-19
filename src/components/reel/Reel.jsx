import React from "react";
import "./Reel.css";
import reel from "../../assets/reel.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={reel}
    width={"100%"}
    height={400}
    overflow="hidden"
    onDragStart={handleDragStart}
    role="presentation"
    alt=""
  />,
  <img
    src={reel}
    width={"100%"}
    height={400}
    onDragStart={handleDragStart}
    role="presentation"
    alt=""
  />,
  <img
    src={reel}
    width={"100%"}
    height={400}
    overflow="hidden"
    onDragStart={handleDragStart}
    role="presentation"
    alt=""
  />,
  <img
    src={reel}
    width={"100%"}
    height={400}
    overflow="hidden"
    onDragStart={handleDragStart}
    role="presentation"
    alt=""
  />,
  <img
    src={reel}
    width={"100%"}
    height={400}
    overflow="hidden"
    onDragStart={handleDragStart}
    role="presentation"
    alt=""
  />,
];
const responsive = {
  0: {
    items: 1,
  },
  550: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const Reel = () => {
  return (
    <section className="reel-content container" id="associate">
      <h2 className="reel-title">Nuestros Asociados</h2>
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </section>
  );
};

export default Reel;
