import React from "react";
import Grid from "./grid/Grid";
import './Schedule.css';

const Schedule = () => {
  return (
    <section className="schedule-section ">
      <div className="schedule-content container ">
        <h2>Horarios</h2>
        <Grid />
      </div>
    </section>
  );
};

export default Schedule;
