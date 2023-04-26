import React, { useEffect, useState,useContext } from "react";
import "./Reel.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: {
    items: 1,
  },
  550: {
    items: 1,
    itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const Reel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isPrev, setIsPrev] = useState(false);


  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);


  const { data } = useContext(Context);
 

  useEffect(() => {
    if (activeIndex === data.length - 1) {
      setIsNext(false);
    } else if (activeIndex < data.length - 1) {
      setIsNext(true);
    }
    if (activeIndex === 0) {
      setIsPrev(false);
    } else if (activeIndex > 0) {
      setIsPrev(true);
    }
  }, [activeIndex, data]);

  const images = data.map((a) => (
    <Link to={`/associates/${a.id}`}>
    <img
      src={a.profile}
      width={"100%"}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
  </Link>
  ));

  return (
    <>
      <h2 className="reel-title">Nuestros Asociados</h2>
      <section className="reel-content container" id="associate">
        {isPrev ? (
          <button onClick={slidePrev} className="reel-button">
            {"<"}
          </button>
        ) : (
          <button className="reel-button disabled">{"<"}</button>
        )}
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={images}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        {isNext ? (
          <button onClick={slideNext} className="reel-button">
            {">"}
          </button>
        ) : (
          <button className="reel-button disabled">{">"}</button>
        )}
      </section>
    </>
  );
};

export default Reel;
