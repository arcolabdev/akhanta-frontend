import React, { useEffect } from "react";
import "./Schedule.css";
import scheduleInfo from "./scheduleInfo.json";
import DayCard from "./dayCard/index";

const Schedule = () => {
  return (
    <section className="schedule-section " id="horarios">
      <div className="schedule-content ">
        <h2>Horarios</h2>
        {/* <div className="days-container">
          {scheduleInfo &&
            scheduleInfo.map((d) => <h3 className="day-name"> {d.day}</h3>)}
        </div> */}
        <div className="times-container">
          {scheduleInfo &&
            scheduleInfo.map((d) => <DayCard dayInfo={d}></DayCard>)}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
