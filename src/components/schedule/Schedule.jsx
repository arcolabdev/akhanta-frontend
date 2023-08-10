import React from "react";
import Grid from "./grid/Grid";
import './Schedule.css';
import schedule from "../../services/schedule.json"

const Schedule = () => {
  return (
    <section className="schedule-section " id="horarios">
      <div className="schedule-content ">
        <h2>Horarios</h2>
        {/* <h2>{schedule[0].name}</h2> */}
        
        <Grid />
      </div>
    </section>
  );
};

export default Schedule;
