import React, { useEffect, useState } from "react";
import "./Reel.css";
// import reel from "../../assets/reel.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";

const API_ROOT = "http://localhost:8080/api/v1/associates/";
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
  const [associates, setAssociates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  useEffect(() => {
    axios
      .get(API_ROOT)
      .then((response) => {
        setAssociates(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);


  useEffect(() => {
    if (activeIndex === associates.length - 1) {
      setIsNext(false);
    } else if (activeIndex < associates.length - 1) {
      setIsNext(true);
    }
    if (activeIndex === 0) {
      setIsPrev(false);
    } else if (activeIndex > 0) {
      setIsPrev(true);
    }
  }, [activeIndex, associates]);

  const images = associates.map((a) => (
    <img
      src={a.profile}
      width={"100%"}
      onDragStart={handleDragStart}
      role="presentation"
      alt=""
    />
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
