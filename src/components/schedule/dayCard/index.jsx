import React, { useEffect } from "react";
import "./styles.css";

const DayCard = ({ dayInfo }) => {
  let newArray = dayInfo;

  useEffect(() => {
    const day = dayInfo.day;
    let time = 0;
    let auxDay;
    let newArray = dayInfo;
    // let arrayAux = [];

    dayInfo.activities.forEach((a, i) => {
      if (time === a.time) {
        auxDay = {
          name: dayInfo.activities[i - 1],
          secondName: a.name,
          time: a.time,
        };
        
        // arrayAux = newArray.activities.filter((act) => {
        //   return act.time !== time;
        // });

        // arrayAux.push(auxDay);
      } else {
        time = a.time;
      }
    });
  }, [dayInfo]);

  return (
    <div className="day-card">
      <h3 className="day-name">{newArray.day}</h3>
      {newArray.activities.map((a, i ) => (
        <div className={newArray.activities.length === 1 ? `activity-card activity-card-single` :`activity-card activity-card${i}`}>
          <p className="activity-name"> {a.name}</p>
          {a.secondName && <p className="activity-name"> {a.secondName}</p>}

          <p className="activity-time"> {a.time}</p>
        </div>
      ))}
    </div>
  );
};

export default DayCard;
