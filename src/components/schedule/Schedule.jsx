import React from "react";
import Grid from "./grid/Grid";
import "./Schedule.css";
import mandala_left from "../../assets/mandalas-left.png";
import mandala_right from "../../assets/mandalas-right.png";
import mandala_mobile_left from "../../assets/mandalas-mobile-left.png";
import mandala_mobile_right from "../../assets/mandalas-mobile-right.png";

const Schedule = () => {
  return (
    <section className="schedule-section " id="horarios">
      <div className="mandala-desktop">
        <img
          src={mandala_left}
          alt="decoration"
          className="mandala-image mandala-desktop"
        />
      </div>
      <div className="mandala-mobile">
        <img
          src={mandala_mobile_left}
          alt="decoration"
          className="mandala-image"
        />
      </div>
      <div className="schedule-content ">
        <Grid />
      </div>
      <div className="mandala-desktop">
        <img src={mandala_right} alt="decoration" className="mandala-image" />
      </div>
      <div className="mandala-mobile">
        <img
          src={mandala_mobile_right}
          alt="decoration"
          className="mandala-image"
        />
      </div>
    </section>
  );
};

export default Schedule;
