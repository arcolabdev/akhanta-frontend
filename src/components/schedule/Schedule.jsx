import React from "react";
import Grid from "./grid/Grid";
import './Schedule.css';

const Schedule = () => {
  return (
    <section className="schedule-section " id="horarios">
      <div className="schedule-content ">
        <h2>Horarios</h2>
        <Grid />
      </div>
    </section>
  );
};

export default Schedule;
