import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const items = [
    "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
    "https://www.inictel-uni.edu.pe/boletin/2019_noviembre/images/200x200.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikfoQOntmYpVSQ996xSZKpBRqRPLtS7_PaLO7rNBv8VAg2Qewm4n-kIxorj88t5HrhFg&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/6/60/W-200x200-300dpi.png",
  ];

  // useEffect(() => {
  //   axios
  //     .get("https://akhanta.herokuapp.com/api/v1/items/")
  //     .then((response) => {
  //       setitems(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  let visibleItems;
  if (items) {
    // we want the scope to be always to be in the scope of the array so that the carousel is endless
    const indexInArrayScope =
      ((activeIndex % items.length) + items.length) % items.length;

    // so that the carousel is endless, we need to repeat the items twice
    // then, we slice the the array so that we only have 3 items visible at the same time
    visibleItems = [...items, ...items].slice(
      indexInArrayScope,
      indexInArrayScope + 3
    );
  }
  return (
    <div className="reel-container" id="associates">
      <h2 className="reel-title">Nuestros Asociados</h2>
      <div className="main-wrapper">
        <div className="wrapper">
          {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
          {items && (
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleItems.map((item, i) => {
                // The layout prop makes the elements change its position as soon as a new one is added
                // The key tells framer-motion that the elements changed its position
                return (
                  <motion.div
                    className={
                      item === visibleItems[1] ? "card" : "card no-show-mb"
                    }
                    key={item}
                    layout
                    custom={{
                      direction,
                      position: () => {
                        if (item === visibleItems[0]) {
                          return "left";
                        } else if (item === visibleItems[1]) {
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
                        item === visibleItems[1]
                          ? "slider-img card"
                          : "slider-img card no-show-mb"
                      }
                      src={item}
                      alt="img-slider"
                    />
                    <button
                      className={
                        item === visibleItems[1] ? "reel-btn" : " no-show-btn"
                      }
                    >
                      Ver más...
                    </button>
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
