import React from "react";
import "./styles.css";

const DayCard = ({dayInfo}) => {
  return (
    <div className="day-card">
      <h3 className="day-name">{dayInfo.day}</h3>
      {dayInfo.activities.map((a) => (
        <div className="activity-card">
          <p className="activity-name"> {a.name}</p>
          <p className="activity-time"> {a.time}</p>
        </div>
      ))}
    </div>
  );
};

export default DayCard;
