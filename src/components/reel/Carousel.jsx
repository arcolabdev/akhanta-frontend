import "./Carousel.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../../Context";

export default function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const { data } = useContext(Context);

  const handleClick = (newDirection) => {
    console.log(data);
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  let visibleData;
  if (data) {
    // we want the scope to be always to be in the scope of the array so that the carousel is endless
    const indexInArrayScope =
      ((activeIndex % data.length) + data.length) % data.length;

    // so that the carousel is endless, we need to repeat the data twice
    // then, we slice the the array so that we only have 3 data visible at the same time
    visibleData = [...data, ...data].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );
  }
  return (
    <div className="reel-container" id="associates">
      <h2 className="reel-title">Nuestros Asociados</h2>
      <div className="main-wrapper">
        <div className="wrapper">
          {/*AnimatePresence is necessary to show the data after they are deleted because only max. 3 are shown*/}
          {data && (
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleData.map((item, i) => {
                // The layout prop makes the elements change its position as soon as a new one is added
                // The key tells framer-motion that the elements changed its position
                return (
                  <motion.div
                    className={
                      item === visibleData[1] ? "card" : "card no-show-mb"
                    }
                    key={i}
                    layout
                    custom={{
                      direction,
                      position: () => {
                        if (item === visibleData[0]) {
                          return "left";
                        } else if (item === visibleData[1]) {
                          return "center";
                        } else {
                          return "right";
                        }
                      },
                    }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      className={
                        item === visibleData[1]
                          ? "slider-img card"
                          : "slider-img card no-show-mb"
                      }
                      src={item.profile}
                      alt="img-slider"
                    />
                    <Link to={`associates/${item.id}`}>
                      <button
                        className={
                          item === visibleData[1] ? "reel-btn" : " no-show-btn"
                        }
                      >
                        Ver más...
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
        <div className="buttons">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => handleClick(-1)}
            className="reel-button"
          >
            ◀︎
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => handleClick(1)}
            className="reel-button"
          >
            ▶︎
          </motion.button>
        </div>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
