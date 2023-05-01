import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  //   const items = ["🍔", "🍕", "🌭", "🍗"];
  // const [items, setitems] = useState();
  const items = [
    "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg",
    "https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg",
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
                    key={i}
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
                    transition={{ duration: 1 }}
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
