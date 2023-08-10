import React, { useEffect } from "react";
import "./Grid.css";
import schedule from "../../../services/schedule.json";

const Grid = () => {
  let lunes = [];
  let martes = [];
  let miercoles = [];
  let jueves = [];
  let viernes = [];

  // eslint-disable-next-line
  function mapActivies() {
    // eslint-disable-next-line
    schedule.activities.map((a) => {
      // eslint-disable-next-line
      a.days.map((d) => {
        switch (d.day) {
          case "lunes":
            lunes.push(d);
            break;
          case "martes":
            martes.push(d);
            break;
          case "miercoles":
            miercoles.push(d);
            break;
          case "jueves":
            jueves.push(d);
            break;
          case "viernes":
            viernes.push(d);
            break;
          default:
            lunes.push(d);
            break;
        }
      });
    });
  }
  return (
    <div className="schedule">
      <div className="time">Hora</div>
      <div className="day">Lunes</div>
      <div className="day">Martes</div>
      <div className="day">Miércoles</div>
      <div className="day">Jueves</div>
      <div className="day">Viernes</div>
      <div className="time">9:00</div>
      <div className="course"></div>
      <div className="course"></div>
      <div className="course"></div>
      <div className="course">Meditación</div>
      <div className="course"></div>
      <div className="time">10:00</div>
      <div className="course"></div>
      <div className="course">Tai Chi</div>
      <div className="course"></div>
      <div className="course">Tai Chi</div>
      <div className="course"></div>
      <div className="time">14:00</div>
      <div className="course">Tai Chi</div>
      <div className="course">Kung Fu (adultos)</div>
      <div className="course">Tai Chi</div>
      <div className="course">Kung Fu (adultos)</div>
      <div className="course"></div>
      <div className="time">15:30</div>
      <div className="course"></div>
      <div className="course">Flexibilidad</div>
      <div className="course"></div>
      <div className="course">Flexibilidad</div>
      <div className="course"></div>
      <div className="time">16:00</div>
      <div className="course"></div>
      <div className="course">Tai Chi</div>
      <div className="course"></div>
      <div className="course">Tai Chi</div>
      <div className="course"></div>
      <div className="time">17:00</div>
      <div className="course">Yoga</div>
      <div className="course"></div>
      <div className="course">Yoga</div>
      <div className="course"></div>
      <div className="course"></div>
      <div className="time">18:15</div>
      <div className="course">Kung Fu (Kids)</div>
      <div className="course"></div>
      <div className="course"></div>
      <div className="course">Kung Fu (Kids)</div>
      <div className="course"></div>
      <div className="time">19:00</div>
      <div className="course">Tai Chi</div>
      <div className="course">Kung Fu (Infantil y juvenil)</div>
      <div className="course">Tai Chi</div>
      <div className="course">Kung Fu (Infantil y juvenil)</div>
      <div className="course"></div>
      <div className="time">20:00</div>
      <div className="course">Kung Fu (adultos)</div>
      <div className="course">
        Kung Fu (Infantil y juvenil) <br /> Tai Chi
      </div>
      <div className="course">Kung Fu (adultos)</div>
      <div className="course">
        Kung Fu (Infantil y juvenil) <br />
        Tai Chi
      </div>
      <div className="course"></div>
    </div>
  );
};

export default Grid;
